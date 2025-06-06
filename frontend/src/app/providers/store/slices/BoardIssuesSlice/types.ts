import { EntityState } from '@reduxjs/toolkit';
import { Issue } from '@/app/types';
import { IssueStatus } from '@/app/types/global';

export interface BoardIssuesSlice extends EntityState<Issue, number> {
    isLoading: boolean;
    isError: boolean;
}

export type ChangeIssueStatusType = {
    issueId: number;
    status: IssueStatus;
}
