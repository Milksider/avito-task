import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BoardIssuesSlice, ChangeIssueStatusType } from './types';
import { StateSchema } from '@/app/providers/store/StateSchema';
import { Issue } from '@/app/types';
import { fetchIssuesByBoard } from './api/fetchIssuesByBoard';

const boardIssuesAdapter = createEntityAdapter<Issue>();

export const getBoardIssues = boardIssuesAdapter.getSelectors<StateSchema>(
    (state) => {
        return state.boardIssuesSlice || boardIssuesAdapter.getInitialState();
    },
);

const initialState: BoardIssuesSlice = {
    isLoading: false,
    isError: false,
    ids: [],
    entities: {},
};

const boardIssuesSlice = createSlice({
    name: 'boardIssues',
    initialState: boardIssuesAdapter.getInitialState<BoardIssuesSlice>(initialState),
    reducers: {
        setChangeIssueStatus: (state, action: PayloadAction<ChangeIssueStatusType>) => {
            const newStatus = action.payload.status;
            const issueId = action.payload.issueId;

            boardIssuesAdapter.updateOne(state, {
                id: issueId,
                changes: { status: newStatus },
            });
        },
        addIssueOnBoard: (state, action: PayloadAction<Issue>) => {
            console.log(action.payload);
            boardIssuesAdapter.addOne(state, action.payload);
            state.ids = [action.payload.id, ...state.ids.filter(id => id !== action.payload.id)];
        },
        updateIssueOnBoard: (state, action: PayloadAction<Issue>) => {
            const {boardId,boardName,status,priority,description,title,assignee} = action.payload;
            boardIssuesAdapter.updateOne(state, {
                id: action.payload.id,
                changes: {boardId,boardName,status,priority,description,title,assignee},
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchIssuesByBoard.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })

            .addCase(fetchIssuesByBoard.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                boardIssuesAdapter.setAll(state, action.payload.data)

            })

            .addCase(fetchIssuesByBoard.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export const {
    setChangeIssueStatus,
    addIssueOnBoard,
    updateIssueOnBoard,
} = boardIssuesSlice.actions;

export default boardIssuesSlice.reducer;
