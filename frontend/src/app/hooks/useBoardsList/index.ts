import { useEffect } from 'react';
import { fetchBoardsList } from '@/app/providers/store/slices/BoardsSlice/api/fetchBoardsList';
import { useAppDispatch } from '@/shared/hooks';
import { useSelector } from 'react-redux';
import { getBoards } from '@/app/providers/store/slices/BoardsSlice/boardsSlice';
import { Board } from '@/app/types';

export const useBoardsList = (): Board[] => {
    const dispatch = useAppDispatch();
    const boards = useSelector(getBoards.selectAll);

    useEffect(() => {
        if (!boards.length) {
            dispatch(fetchBoardsList({}));
        }
    }, [boards, fetchBoardsList, dispatch]);

    return boards || [];
}
