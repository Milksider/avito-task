import * as styles from './BoardDetailPage.sx';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '@/shared/hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { setChangeIssueStatus } from '@/app/providers/store/slices/BoardIssuesSlice/boardIssuesSlice';
import { fetchIssuesByBoard } from '@/app/providers/store/slices/BoardIssuesSlice/api/fetchIssuesByBoard';
import { Issue } from '@/widgets/Issue';
import { selectFilteredIssues, selectIsLoading } from '@/app/providers/store/slices/BoardIssuesSlice/selectors';
import { IssueStatus } from '@/app/types/global';
import { changeIssueStatus } from '@/app/api/issues';
import { toggleCreateIssueModal } from '@/app/providers/store/slices/CreateIssueModalSlice/createIssueModalSlice';
import { Issue as IssueType } from '@/app/types';
import { useGetBoardById } from '@/app/hooks/useGetBoardById';
import LoopIcon from '@mui/icons-material/Loop';
import { loading } from '@/app/styles/variables';

const BoardDetailPage = () => {
    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentIssue, setCurrentIssue] = useState(null);
    const isLoading = useSelector(selectIsLoading);

    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const filteredIssues = useSelector(selectFilteredIssues);
    const boardData = useGetBoardById(Number(id));

    useEffect(() => {
        dispatch(fetchIssuesByBoard({ id: Number(id) }));
    }, [dispatch, id, fetchIssuesByBoard]);

    const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        // todo
    };

    const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        // todo
    };

    const onDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
        // todo
    };

    const onDragStart = (event: React.DragEvent<HTMLDivElement>, boardId: IssueStatus, issueId: number) => {
        setCurrentBoard(boardId);
        setCurrentIssue(issueId);
    };

    const onDrop = async (event: React.DragEvent<HTMLDivElement>, boardId: IssueStatus) => {
        event.preventDefault();
        dispatch(setChangeIssueStatus({
            status: boardId,
            issueId: currentIssue,
        }));

        const data = {
            status: boardId,
        };

        await changeIssueStatus({ issueId: currentIssue, data });
    };

    const dropIssueHandler = async (event: React.DragEvent<HTMLDivElement>, boardId: IssueStatus) => {
        event.preventDefault();
        dispatch(setChangeIssueStatus({
            status: boardId,
            issueId: currentIssue,
        }));

        const data = {
            status: boardId,
        };

        await changeIssueStatus({ issueId: currentIssue, data });
    };

    const onIssueCLick = (issueData: IssueType) => {
        dispatch(toggleCreateIssueModal({
            isOpen: true,
            issueData: issueData,
        }));
    };

    return (
        <Box sx={styles.page}>
            <Box component='h1' sx={styles.title}>{boardData?.name}</Box>
            {isLoading ? <LoopIcon sx={loading} /> :
                <Box sx={styles.wrapper}>
                    {Object.keys(filteredIssues)
                        .map((statusKey) => {
                            const status = statusKey as IssueStatus;
                            const boardName = boardData?.name;
                            const boardId = boardData?.id;

                            return (
                                <Box
                                    onDragOver={onDragOver}
                                    onDrop={(event) => dropIssueHandler(event, status)}
                                    sx={styles.board}
                                >
                                    <h3>{status}</h3>
                                    <Box sx={styles.column}>
                                        {filteredIssues[status].map(({
                                            id,
                                            description,
                                            status,
                                            title,
                                            priority,
                                            assignee,
                                        }) => (
                                            <Issue
                                                key={id}
                                                boardId={boardId}
                                                description={description}
                                                title={title}
                                                assignee={assignee}
                                                boardName={boardName}
                                                id={id}
                                                priority={priority}
                                                status={status}
                                                onDragOver={onDragOver}
                                                onDragLeave={onDragLeave}
                                                onDragStart={onDragStart}
                                                onDragEnd={onDragEnd}
                                                onDrop={onDrop}
                                                onClick={() => onIssueCLick({
                                                    boardId,
                                                    boardName,
                                                    id,
                                                    description,
                                                    status,
                                                    title,
                                                    priority,
                                                    assignee,
                                                })}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                            );
                        })}
                </Box>
            }
        </Box>
    );
};

export default BoardDetailPage;
