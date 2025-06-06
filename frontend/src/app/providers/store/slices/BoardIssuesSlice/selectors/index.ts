import { createSelector } from '@reduxjs/toolkit';
import { getBoardIssues } from '@/app/providers/store/slices/BoardIssuesSlice/boardIssuesSlice';
import { IssueStatus } from '@/app/types/global';

const selectAllBoardIssues = getBoardIssues.selectAll;

export const selectFilteredIssues = createSelector(
    [selectAllBoardIssues],
    (issues) => {
        return issues.reduce<Record<IssueStatus, typeof issues>>((acc, issue) => {
            const status = issue.status as IssueStatus;
            if (!acc[status]) {
                acc[status] = [];
            }
            acc[status].push(issue);
            return acc;
        }, {
            Backlog: [],
            Done: [],
            InProgress: [],
        });
    }
);
