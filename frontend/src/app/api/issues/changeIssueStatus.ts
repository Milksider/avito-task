import apiClient from '@/app/api/apiClient';
import { IssueStatus } from '@/app/types/global';

type Data = {
    status: IssueStatus;
}

type ChangeIssueStatusParams = {
    issueId: number;
    data: Data;
}

export const changeIssueStatus = async ({issueId, data}: ChangeIssueStatusParams) => {
    try {
        await apiClient.put(`tasks/updateStatus/${issueId}`, data);
    } catch {
        throw new Error();
    }
}
