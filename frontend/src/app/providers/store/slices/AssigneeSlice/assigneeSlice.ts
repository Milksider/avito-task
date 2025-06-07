import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { AssigneeSlice } from './types';
import { StateSchema } from '@/app/providers/store/StateSchema';
import { Assigne } from '@/app/types';
import { fetchAssigneeList } from './api/fetchAssigneeList';

const assigneeAdapter = createEntityAdapter<Assigne>();

export const getAssignees = assigneeAdapter.getSelectors<StateSchema>(
    (state) => {
        return state.assigneeSlice || assigneeAdapter.getInitialState();
    },
);

const initialState: AssigneeSlice = {
    isLoading: false,
    isError: false,
    ids: [],
    entities: {},
};

const assigneeSlice = createSlice({
    name: 'assignee',
    initialState: assigneeAdapter.getInitialState<AssigneeSlice>(initialState),
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAssigneeList.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })

            .addCase(fetchAssigneeList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                assigneeAdapter.setAll(state, action.payload.data)
            })

            .addCase(fetchAssigneeList.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export const {
} = assigneeSlice.actions;

export default assigneeSlice.reducer;
