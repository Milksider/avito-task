import { StateSchema } from './StateSchema';
import { configureStore } from '@reduxjs/toolkit';
import issuesSlice from '../store/slices/IssuesSlice/issuesSlice';
import boardsSlice from '../store/slices/BoardsSlice/boardsSlice';
import boardIssuesSlice from '../store/slices/BoardIssuesSlice/boardIssuesSlice';

export function makeStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            issueSlice: issuesSlice,
            boardsSlice: boardsSlice,
            boardIssuesSlice: boardIssuesSlice,
        },
        preloadedState: initialState,
    });
}

export const store = makeStore();
export type AppDispatch = typeof store.dispatch;
