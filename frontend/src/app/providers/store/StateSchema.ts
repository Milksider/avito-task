import { PayloadAction } from '@reduxjs/toolkit';
import { IssuesSlice } from '../store/slices/IssuesSlice/types';
import { BoardsSlice } from '../store/slices/BoardsSlice/types';
import { BoardIssuesSlice } from '../store/slices/BoardIssuesSlice/types';

export type StateSchema = {
    issueSlice: IssuesSlice,
    boardsSlice: BoardsSlice,
    boardIssuesSlice: BoardIssuesSlice,
};

export type ThunkConfig = {
    /** Состояние хранилища */
    state: StateSchema;
    /** Возвращаемое значение при ошибке запроса */
    rejectValue?: string;
};

export interface AsyncThunkAction<T, U> extends PayloadAction<T> {
    /** дополнительной информации о action */
    meta?: {
        /** параметр, переданный в thunk при вызове */
        arg?: U;
    };
}
