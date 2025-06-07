import * as styles from './BoardsPage.sx';
import { Box } from '@mui/material';
import { useAppDispatch } from '@/shared/hooks';
import { useEffect } from 'react';
import { fetchBoardsList } from '@/app/providers/store/slices/BoardsSlice/api/fetchBoardsList';
import { useSelector } from 'react-redux';
import { getBoards } from '@/app/providers/store/slices/BoardsSlice/boardsSlice';
import { Board } from './Board';
import LoopIcon from '@mui/icons-material/Loop';
import { loading } from '@/app/styles/variables';
import { selectIsLoading } from '@/app/providers/store/slices/BoardsSlice/selectors';

const BoardsPage = () => {
    const dispatch = useAppDispatch();
    const boards = useSelector(getBoards.selectAll);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchBoardsList({}))
    }, [dispatch, fetchBoardsList])

    return (
        <Box sx={styles.wrapper}>
            {isLoading && <LoopIcon sx={loading} />}
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

export default BoardsPage;
