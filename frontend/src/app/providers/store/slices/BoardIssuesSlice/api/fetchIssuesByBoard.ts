import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store/StateSchema';
import apiClient from '@/app/api/apiClient';
import { FetchIssuesByBoardProps, GetIssues } from '@/app/providers/store/slices/BoardIssuesSlice/api/types';

export const fetchIssuesByBoard = createAsyncThunk<GetIssues, FetchIssuesByBoardProps, ThunkConfig>(
    'boardIssues/fetchBoardIssuesList',
    async (props, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        const {id} = props;

        try {
            const response = await apiClient.get<GetIssues>(
                `boards/${id}`,
            );

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    },
);
