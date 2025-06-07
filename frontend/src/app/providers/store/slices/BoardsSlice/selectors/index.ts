import { getBoards } from '@/app/providers/store/slices/BoardsSlice/boardsSlice';
import { StateSchema } from '@/app/providers/store/StateSchema';

export const selectBoards = getBoards.selectAll;

export const selectIsLoading = (state: StateSchema) => state.boardsSlice.isLoading;
