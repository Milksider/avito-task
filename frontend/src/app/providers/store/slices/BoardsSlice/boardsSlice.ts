import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { BoardsSlice } from './types';
import { StateSchema } from '@/app/providers/store/StateSchema';
import { Board } from '@/app/types';
import { fetchBoardsList } from './api/fetchBoardsList';

const boardsAdapter = createEntityAdapter<Board>();

export const getBoards = boardsAdapter.getSelectors<StateSchema>(
    (state) => {
        return state.boardsSlice || boardsAdapter.getInitialState();
    },
);

const initialState: BoardsSlice = {
    isLoading: false,
    isError: false,
    ids: [],
    entities: {},
};

const boardsSlice = createSlice({
    name: 'boards',
    initialState: boardsAdapter.getInitialState<BoardsSlice>(initialState),
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBoardsList.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })

            .addCase(fetchBoardsList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                boardsAdapter.setAll(state, action.payload.data)

            })

            .addCase(fetchBoardsList.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export const {
} = boardsSlice.actions;

export default boardsSlice.reducer;
