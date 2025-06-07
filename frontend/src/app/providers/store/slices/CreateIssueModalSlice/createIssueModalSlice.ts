import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateIssueModalSlice } from './types';

const initialState: CreateIssueModalSlice = {
    isOpen: false,
    issueData: null,
};

const createIssueModalSlice = createSlice({
    name: 'createIssueModal',
    initialState,
    reducers: {
        toggleCreateIssueModal: (state, action: PayloadAction<CreateIssueModalSlice>) => {
            state.isOpen = action.payload.isOpen;
            state.issueData = action.payload.issueData;
        },

    },
});

export const {
    toggleCreateIssueModal
} = createIssueModalSlice.actions;

export default createIssueModalSlice.reducer;
