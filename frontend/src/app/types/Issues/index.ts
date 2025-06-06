import { Assigne } from '@/app/types/Assigne';

export type Issue = {
    assignee: Assigne,
    boardId: number,
    boardName: string,
    description: string,
    id: number,
    priority: string,
    status: string,
    title: string
}
