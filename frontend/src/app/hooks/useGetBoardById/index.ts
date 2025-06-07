import { useBoardsList } from '@/app/hooks/useBoardsList';
import { Board } from '@/app/types';

export const useGetBoardById = (id: number): Board => {
    const boards = useBoardsList();
    const currentBoard = boards.find(board => board.id === id);

    return currentBoard || undefined;
}
