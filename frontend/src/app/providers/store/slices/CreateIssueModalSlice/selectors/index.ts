import { StateSchema } from '@/app/providers/store/StateSchema';

export const selectCreateIssueModalData = (state: StateSchema) => state.createIssueModalSlice;
