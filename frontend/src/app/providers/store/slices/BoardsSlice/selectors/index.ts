import { getBoards } from '@/app/providers/store/slices/BoardsSlice/boardsSlice';

export const selectBoards = getBoards.selectAll;

export const selectBoardsIds = getBoards.selectIds;
