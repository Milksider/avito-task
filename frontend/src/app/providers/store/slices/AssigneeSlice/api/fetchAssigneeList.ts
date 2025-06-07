import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store/StateSchema';
import apiClient from '@/app/api/apiClient';
import { FetchAssigneesProps, GetAssignees } from './types';

export const fetchAssigneeList = createAsyncThunk<GetAssignees, FetchAssigneesProps, ThunkConfig>(
    'assignee/fetchAssigneeList',
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi;

        try {
            const response = await apiClient.get<GetAssignees>(
                `users`,
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
