import * as styles from './Issue.sx';
import { Avatar, Box } from '@mui/material';
import { Issue as IssueType } from '@/app/types/Issues';

export interface IssueProps extends IssueType {
    onDragOver?: (event: React.DragEvent<HTMLDivElement>) => void,
    onDragLeave?: (event: React.DragEvent<HTMLDivElement>) => void,
    onDragStart?: (event: React.DragEvent<HTMLDivElement>, status: IssueType['status'], id: IssueType['id']) => void,
    onDragEnd?: (event: React.DragEvent<HTMLDivElement>) => void,
    onDrop?: (event: React.DragEvent<HTMLDivElement>, status: IssueType['status'], id: IssueType['id']) => void,
    onClick?: () => void;
};

export const Issue = ({
    boardId,
    boardName,
    id,
    description,
    status,
    title,
    priority,
    assignee,
    onDragLeave,
    onDragEnd,
    onDrop,
    onDragStart,
    onDragOver,
    onClick,
}: IssueProps) => {

    return (
        <Box
            sx={styles.wrapper}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDragStart={(event) => onDragStart?.(event, status, id)}
            onDragEnd={onDragEnd}
            onDrop={(event) => onDrop?.(event, status, id)}
            draggable={true}
            onClick={onClick}
        >
            <Box
                sx={styles.content}
            >
                <Box sx={styles.head}>
                    <Box sx={styles.title}>{title}</Box>
                    <Box sx={styles.priorityWrapper}>
                        Приоритетность: <Box sx={styles.priority(priority)}>{priority}</Box>
                    </Box>
                </Box>
                <Box sx={styles.details}>
                    <Box sx={styles.detailsItem}># {id}</Box>
                    <Box sx={styles.detailsItem}>{boardName}</Box>
                    <Box>
                        <Avatar
                            src={assignee.avatarUrl}
                            sx={styles.userAvatar}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
