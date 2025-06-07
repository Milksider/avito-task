import * as styles from './Board.sx';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

type BoardProps = {
    id: number,
    name: string,
    description: string,
    taskCount: number,
}

export const Board = ({taskCount,id,name,description}: BoardProps) => {
    const hrefToDetailPage = `/boards/${id}`;

    return (
        <Link to={hrefToDetailPage}>
            <Box sx={styles.wrapper}>
                <Box sx={styles.title}>{name}</Box>
                <Box sx={styles.text}>{description}</Box>
                <Box sx={styles.id}>#{id}</Box>
                <Box sx={styles.tasks}>Задач: {taskCount}</Box>
            </Box>
        </Link>
    );
};
