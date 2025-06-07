import apiClient from '@/app/api/apiClient';
import { CreateIssueFields } from '../types';

type CreateIssueResponse = {
    id: number;
}

export const createIssue = async (payload: CreateIssueFields) => {
    const {data} =  await apiClient.post<CreateIssueResponse>('/tasks/create', payload)
    return data.id;
}
