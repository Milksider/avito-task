import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
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
    filterPriority: '',
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
        setFilterPriority: (state, action) => {
            state.filterPriority = action.payload;
        },
        setFilterBoard: (state, action) => {
            state.filterBoard = action.payload;
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
    setSearchQuery, setFilterPriority, setFilterBoard
} = issueSlice.actions;

export default issueSlice.reducer;
