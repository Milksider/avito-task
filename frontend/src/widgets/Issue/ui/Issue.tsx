import * as styles from './Issue.sx';
import { Avatar, Box } from '@mui/material';
import { Issue as IssueType } from '@/app/types/Issues';

export interface IssueProps extends IssueType {
    onDragOver?: any,
    onDragLeave?: any,
    onDragStart?: any,
    onDragEnd?: any,
    onDrop?: any
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
    onDragOver
}: IssueProps) => {

    return (
        <Box
            sx={styles.wrapper}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDragStart={(event) => onDragStart(event, status, id)}
            onDragEnd={onDragEnd}
            onDrop={(event) => onDrop(event, status, id)}
            draggable={true}
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
