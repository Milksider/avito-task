import apiClient from '@/app/api/apiClient';
import { CreateIssueFields } from '../types';

interface UpdateIssueData extends CreateIssueFields {
    id: number;
}

export const updateIssue = async (payload: UpdateIssueData) => {
    await apiClient.put(`/tasks/update/${payload.id}`, payload)
}
