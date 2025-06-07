import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IssuesSlice } from './types';
import { Issue } from '@/app/types/Issues';
import { fetchIssuesList } from '@/app/providers/store/slices/IssuesSlice/api/fetchIssuesList';
import { StateSchema } from '@/app/providers/store/StateSchema';

const issuesAdapter = createEntityAdapter<Issue>();

export const getIssues = issuesAdapter.getSelectors<StateSchema>(
    (state) => {
        return state.issueSlice || issuesAdapter.getInitialState();
    },
);

const initialState: IssuesSlice = {
    isLoading: false,
    isError: false,
    searchQuery: '',
    filterStatus: '',
    filterBoard: null,
    ids: [],
    entities: {},
};

const issueSlice = createSlice({
    name: 'issues',
    initialState: issuesAdapter.getInitialState<IssuesSlice>(initialState),
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setFilterStatus: (state, action) => {
            state.filterStatus = action.payload;
        },
        setFilterBoard: (state, action) => {
            state.filterBoard = action.payload;
        },
        addIssue: (state, action: PayloadAction<Issue>) => {
            issuesAdapter.addOne(state, action.payload);
            state.ids = [action.payload.id, ...state.ids.filter(id => id !== action.payload.id)];
        },
        updateIssue: (state, action: PayloadAction<Issue>) => {
            issuesAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload,
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchIssuesList.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })

            .addCase(fetchIssuesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                issuesAdapter.setAll(state, action.payload.data)
            })

            .addCase(fetchIssuesList.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export const {
    setSearchQuery, setFilterStatus, setFilterBoard, addIssue, updateIssue
} = issueSlice.actions;

export default issueSlice.reducer;
