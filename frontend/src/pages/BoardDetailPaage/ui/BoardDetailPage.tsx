import * as styles from './BoardDetailPage.sx';
//
// export type BoardDetailPageProps = {}

import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '@/shared/hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getBoardIssues, setChangeIssueStatus } from '@/app/providers/store/slices/BoardIssuesSlice/boardIssuesSlice';
import { fetchIssuesByBoard } from '@/app/providers/store/slices/BoardIssuesSlice/api/fetchIssuesByBoard';
import { Issue } from '@/widgets/Issue';
import { selectFilteredIssues } from '@/app/providers/store/slices/BoardIssuesSlice/selectors';
import { IssueStatus } from '@/app/types/global';

export const BoardDetailPage = () => {
    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentIssue, setCurrentIssue] = useState(null);

    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const issues = useSelector(getBoardIssues.selectAll);
    const filteredIssues = useSelector(selectFilteredIssues);

    useEffect(() => {
        dispatch(fetchIssuesByBoard({id: Number(id)}))
    }, [dispatch, id, fetchIssuesByBoard])

    const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        // todo
    }

    const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        // todo
    }

    const onDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
        // todo
    }

    const onDragStart = (event: React.DragEvent<HTMLDivElement>, boardId: IssueStatus, issueId: number) => {
        setCurrentBoard(boardId);
        setCurrentIssue(issueId);
    }

    const onDrop = (event: React.DragEvent<HTMLDivElement>, boardId: IssueStatus) => {
        event.preventDefault();
        dispatch(setChangeIssueStatus({
            status: boardId,
            issueId: currentIssue
        }))
    }

    const dropIssueHandler = (event: React.DragEvent<HTMLDivElement>, boardId: IssueStatus) => {
        event.preventDefault();
        dispatch(setChangeIssueStatus({
            status: boardId,
            issueId: currentIssue
        }))
    }

    return (
        <Box sx={styles.wrapper}>
            {Object.keys(filteredIssues).map((statusKey) => {
                const status = statusKey as IssueStatus;

                return (
                    <Box
                        onDragOver={onDragOver}
                        onDrop={(event) => dropIssueHandler(event, status)}
                    >
                        <h3>{status}</h3>
                        <Box>
                            {filteredIssues[status].map(({
                                boardId,
                                boardName,
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
                                />
                            ))}
                        </Box>
                    </Box>
                );
            })}
        </Box>
    );
};
