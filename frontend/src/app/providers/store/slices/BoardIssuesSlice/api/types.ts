import { Issue } from '@/app/types/Issues';

export type GetIssues = {
    data: Issue[];
}

export type FetchIssuesByBoardProps = {
    id: number;
}
