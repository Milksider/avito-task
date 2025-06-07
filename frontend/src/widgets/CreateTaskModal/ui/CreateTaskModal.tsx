import { Box, Button, Input, MenuItem, Modal, Select } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import * as styles from './CreateTaskModal.sx';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { selectBoards } from '@/app/providers/store/slices/BoardsSlice/selectors';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/shared/hooks';
import { fetchBoardsList } from '@/app/providers/store/slices/BoardsSlice/api/fetchBoardsList';
import { Priority } from '@/app/types';
import { Statuses } from '@/app/types/global';
import { getAssignees } from '@/app/providers/store/slices/AssigneeSlice/assigneeSlice';
import { fetchAssigneeList } from '@/app/providers/store/slices/AssigneeSlice/api/fetchAssigneeList';
import { clearDraft, getDraft, getPriorityString, getStatusString, saveDraft } from '@/app/helpers';
import { createIssue } from '../api/createIssue';
import { CreateIssueFields } from '../types';
import { validationSchema } from '../constants';
import { selectCreateIssueModalData } from '@/app/providers/store/slices/CreateIssueModalSlice/selectors';
import { toggleCreateIssueModal } from '@/app/providers/store/slices/CreateIssueModalSlice/createIssueModalSlice';
import { addIssue, updateIssue as updateIssueInSlice } from '@/app/providers/store/slices/IssuesSlice/issuesSlice';
import { Link, useParams } from 'react-router-dom';
import { addIssueOnBoard, updateIssueOnBoard } from '@/app/providers/store/slices/BoardIssuesSlice/boardIssuesSlice';
import { updateIssue } from '@/widgets/CreateTaskModal/api/updateIssue';

export const CreateTaskModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const params = useParams();

    const { isOpen, issueData } = useSelector(selectCreateIssueModalData);
    const dispatch = useAppDispatch();
    const boards = useSelector(selectBoards);
    const assignees = useSelector(getAssignees.selectAll);
    const isCreating = !issueData?.id;
    const title = isCreating ? 'Создать задачу' : 'Редактировать задачу';
    const buttonText = isCreating ? 'Создать' : 'Редактировать';
    const isCreatingOnBoardPage = window.location.href.includes('/boards/');
    const boardId = params?.id;

    const draftData = getDraft();

    const closeModal = () => {
        dispatch(toggleCreateIssueModal({
            isOpen: false,
            issueData: null,
        }));
    };

    const {
        handleSubmit,
        values,
        handleChange,
        errors,
    } = useFormik<CreateIssueFields>({
        validationSchema,
        initialValues: {
            assigneeId: draftData?.assigneeId || issueData?.assignee.id || null,
            boardId: draftData?.boardId || Number(boardId) || issueData?.boardId || null,
            description: draftData?.description || issueData?.description || '',
            priority: draftData?.priority || issueData?.priority || Priority.LOW,
            title: draftData?.title || issueData?.title || '',
            status: draftData?.status ||issueData?.status || 'Backlog',
        },
        onSubmit: async () => {
            setIsError(false);
            setIsLoading(true);
            const {
                assigneeId,
                boardId,
                description,
                priority,
                title,
                status,
            } = values;
            const data = {
                assigneeId,
                boardId,
                description,
                priority,
                title,
                status,
            };

            try {
                if (isCreating) {
                    const issueId = await createIssue(data);
                    const localData = {
                        boardId,
                        description,
                        priority,
                        title,
                        status,
                        id: issueId,
                        boardName: boards.find(board => board.id === boardId).name,
                        assignee: assignees.find(assignee => assignee.id === assigneeId),
                    };
                    dispatch(addIssue(localData));
                    dispatch(addIssueOnBoard(localData));
                } else {
                    await updateIssue({ ...data, id: issueData.id });
                    const localData = {
                        boardId,
                        description,
                        priority,
                        title,
                        status,
                        id: issueData.id,
                        boardName: boards.find(board => board.id === boardId).name,
                        assignee: assignees.find(assignee => assignee.id === assigneeId),
                    };
                    dispatch(updateIssueInSlice(localData));
                    dispatch(updateIssueOnBoard(localData));
                }

            } catch {
                setIsError(true);
                setIsLoading(false);
            }

            setIsError(false);
            setIsLoading(false);
            clearDraft();
            closeModal();
        },
    });

    const handleChangeFormValue = (event: any) => {
        handleChange(event);
        saveDraft({...values, [event.target.name]: event.target.value})
    }

    useEffect(() => {
        if (!boards.length) {
            dispatch(fetchBoardsList({}));
        }
        if (!assignees.length) {
            dispatch(fetchAssigneeList({}));
        }
    }, [boards, fetchBoardsList, dispatch, fetchAssigneeList, assignees]);

    return (
        <Modal open={isOpen} onClose={closeModal} sx={styles.wrapper}>
            <Box sx={styles.content}>
                <Box
                    component='h1'
                    sx={styles.title}
                >
                    {title}
                </Box>
                <form onSubmit={handleSubmit}>
                    <Box sx={styles.formWrapper}>
                        <Input
                            placeholder='Название'
                            name='title'
                            value={values.title}
                            onChange={handleChangeFormValue}
                            disabled={isLoading}
                            sx={styles.input}
                            error={!!errors.title}
                        />
                        <Textarea
                            placeholder='Описание'
                            name='description'
                            value={values.description}
                            onChange={handleChangeFormValue}
                            minRows={6}
                            disabled={isLoading}
                            sx={styles.textarea}
                            error={!!errors.description}
                        />
                        <Box>
                            <Box>Проект</Box>
                            <Select
                                sx={styles.input}
                                name='boardId'
                                value={String(values.boardId)}
                                onChange={handleChangeFormValue}
                                defaultValue='Проект'
                                disabled={isCreatingOnBoardPage || isLoading}
                                error={!!errors.boardId}
                            >
                                {boards.map((board) =>
                                    <MenuItem value={board.id}>{board.name}</MenuItem>,
                                )}
                            </Select>
                        </Box>
                        <Box>
                            <Box>Приоритет</Box>
                            <Select
                                sx={styles.input}
                                name='priority'
                                value={values.priority}
                                onChange={handleChangeFormValue}
                                defaultValue='Приоритет'
                                disabled={isLoading}
                                error={!!errors.priority}
                            >
                                {Object.values(Priority)
                                    .map((item) =>
                                        <MenuItem value={item}>{getPriorityString(item)}</MenuItem>,
                                    )}
                            </Select>
                        </Box>
                        <Box>
                            <Box>Статус</Box>
                            <Select
                                sx={styles.input}
                                name='status'
                                value={values.status}
                                onChange={handleChangeFormValue}
                                defaultValue='Статус'
                                disabled={isLoading}
                                error={!!errors.status}
                            >
                                {Object.values(Statuses)
                                    .map((item) =>
                                        <MenuItem value={item}>{getStatusString(item)}</MenuItem>,
                                    )}
                            </Select>
                        </Box>
                        <Box>
                            <Box>Исполнитель</Box>
                            <Select
                                sx={styles.input}
                                name='assigneeId'
                                value={String(values.assigneeId)}
                                onChange={handleChangeFormValue}
                                defaultValue='Исполнитель'
                                disabled={isLoading}
                                error={!!errors.assigneeId}
                            >
                                {assignees.map((assignee) =>
                                    <MenuItem value={assignee.id}>{assignee.fullName}</MenuItem>,
                                )}
                            </Select>
                        </Box>
                        <Button
                            type='submit'
                            sx={styles.submitButton}
                            disabled={isLoading || !!Object.keys(errors).length}
                        >
                            {buttonText}
                        </Button>
                        {issueData?.boardId &&
                            <Button
                                sx={styles.submitButton}
                            >
                                <Link to={`/boards/${issueData.boardId}`}>
                                    Перейти на доску
                                </Link>
                            </Button>}
                        {isError && <Box>Ошибка при создании задачи</Box>}
                    </Box>
                </form>
            </Box>
        </Modal>
    );
};
