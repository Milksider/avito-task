import { EntityState } from '@reduxjs/toolkit';
import { Board } from '@/app/types';

export interface BoardsSlice extends EntityState<Board, number> {
    isLoading: boolean;
    isError: boolean;
}
