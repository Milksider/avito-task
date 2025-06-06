import { createSelector } from '@reduxjs/toolkit';
import { getIssues } from '../issuesSlice';
import { IssuesSlice } from '../types';
import { StateSchema } from '@/app/providers/store/StateSchema';

export const selectAllIssues = getIssues.selectAll;

export const selectFilterPriority = (state: StateSchema) => state.issueSlice.filterPriority;

export const selectFilterBoard = (state: StateSchema) => state.issueSlice.filterBoard;

export const selectSearchQuery = (state: StateSchema) => state.issueSlice.searchQuery;

export const selectFilters = (state: { issueSlice: IssuesSlice }) => ({
    searchQuery: state.issueSlice.searchQuery,
    filterPriority: state.issueSlice.filterPriority,
    filterBoard: state.issueSlice.filterBoard,
});

export const selectFilteredIssues = createSelector(
    [selectAllIssues, selectFilters],
    (issues, filters) => {
        const { searchQuery, filterPriority, filterBoard } = filters;

        return issues.filter(issue => {
            // Поиск
            const matchesSearch = searchQuery
                ? issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                issue.assignee.fullName?.toLowerCase().includes(searchQuery.toLowerCase())
                : true;

            // Фильтр по приоритету
            const matchesPriority = filterPriority
                ? issue.priority === filterPriority
                : true;

            // Фильтр по доске
            const matchesBoardId = filterBoard
                ? issue.boardId === filterBoard
                : true;

            return matchesSearch && matchesPriority && matchesBoardId;
        });
    }
);
