import { createSelector } from '@reduxjs/toolkit';
import { getIssues } from '../issuesSlice';
import { IssuesSlice } from '../types';
import { StateSchema } from '@/app/providers/store/StateSchema';

export const selectAllIssues = getIssues.selectAll;

export const selectFilterStatus= (state: StateSchema) => state.issueSlice.filterStatus;

export const selectFilterBoard = (state: StateSchema) => state.issueSlice.filterBoard;

export const selectSearchQuery = (state: StateSchema) => state.issueSlice.searchQuery;

export const selectFilters = (state: { issueSlice: IssuesSlice }) => ({
    searchQuery: state.issueSlice.searchQuery,
    filterStatus: state.issueSlice.filterStatus,
    filterBoard: state.issueSlice.filterBoard,
});

export const selectFilteredIssues = createSelector(
    [selectAllIssues, selectFilters],
    (issues, filters) => {
        const { searchQuery, filterStatus, filterBoard } = filters;

        return issues.filter(issue => {
            // Поиск
            const matchesSearch = searchQuery
                ? issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                issue.assignee.fullName?.toLowerCase().includes(searchQuery.toLowerCase())
                : true;

            // Фильтр по приоритету
            const matchesPriority = filterStatus
                ? issue.status === filterStatus
                : true;

            // Фильтр по доске
            const matchesBoardId = filterBoard
                ? issue.boardId === filterBoard
                : true;

            return matchesSearch && matchesPriority && matchesBoardId;
        });
    }
);
