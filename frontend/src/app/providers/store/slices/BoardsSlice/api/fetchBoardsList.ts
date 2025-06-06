import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store/StateSchema';
import apiClient from '@/app/api/apiClient';
import { FetchBoardsProps, GetBoards } from '@/app/providers/store/slices/BoardsSlice/api/types';

export const fetchBoardsList = createAsyncThunk<GetBoards, FetchBoardsProps, ThunkConfig>(
    'boards/fetchBoardsList',
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi;

        try {
            const response = await apiClient.get<GetBoards>(
                `boards`,
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
