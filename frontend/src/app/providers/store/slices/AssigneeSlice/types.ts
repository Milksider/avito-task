import { EntityState } from '@reduxjs/toolkit';
import { Assigne } from '@/app/types';

export interface AssigneeSlice extends EntityState<Assigne, number>{
    isLoading: boolean;
    isError: boolean;
}
