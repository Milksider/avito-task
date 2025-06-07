import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store/StateSchema';
import apiClient from '@/app/api/apiClient';
import { FetchIssuesProps, GetIssues } from '@/app/providers/store/slices/IssuesSlice/api/types';

export const fetchIssuesList = createAsyncThunk<GetIssues, FetchIssuesProps, ThunkConfig>(
    'issues/fetchIssuesList',
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi;

        try {
            const response = await apiClient.get<GetIssues>(
                `tasks`,
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
