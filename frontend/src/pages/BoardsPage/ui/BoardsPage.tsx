import * as styles from './BoardsPage.sx';
import { Box } from '@mui/material';
import { useAppDispatch } from '@/shared/hooks';
import { useEffect } from 'react';
import { fetchBoardsList } from '@/app/providers/store/slices/BoardsSlice/api/fetchBoardsList';
import { useSelector } from 'react-redux';
import { getBoards } from '@/app/providers/store/slices/BoardsSlice/boardsSlice';
import { Board } from './Board';

export const BoardsPage = () => {
    const dispatch = useAppDispatch();
    const boards = useSelector(getBoards.selectAll);

    useEffect(() => {
        dispatch(fetchBoardsList({}))
    }, [dispatch, fetchBoardsList])

    return (
        <Box sx={styles.wrapper}>
            {boards.map(({id,name,description,taskCount}) =>
                <Board
                    key={id}
                    id={id}
                    name={name}
                    description={description}
                    taskCount={taskCount}
                />
            )}
        </Box>
    );
};
