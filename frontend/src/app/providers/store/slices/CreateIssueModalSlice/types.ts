import { Issue } from '@/app/types';

export type CreateIssueModalSlice = {
    isOpen: boolean;
    issueData: Issue | null;
}
