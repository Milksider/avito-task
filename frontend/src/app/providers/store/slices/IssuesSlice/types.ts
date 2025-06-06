import { EntityState } from '@reduxjs/toolkit';
import { Issue } from '@/app/types/Issues';

export interface IssuesSlice extends EntityState<Issue, number>{
    isLoading: boolean;
    isError: boolean;
    searchQuery: string;
    filterPriority: '',
    filterBoard: null,
}
