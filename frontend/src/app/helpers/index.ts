import { IssueStatus, Priority } from '@/app/types/global';
import { CreateIssueFields } from '@/widgets/CreateTaskModal/types';
import { draftKey } from '@/app/constants/global';

export const getStatusString = (status: IssueStatus) => {
    switch (status) {
        case 'Backlog':
            return 'Бэклог'
        case 'InProgress':
            return 'В работе'
        case 'Done':
            return 'Готово'
        default:
            return ''
    }
}

export const getPriorityString = (priority: Priority) => {
    switch (priority) {
        case Priority.LOW:
            return 'Низкий'
        case Priority.MEDIUM:
            return 'Средний'
        case Priority.HIGH:
            return 'Высокий'
        default:
            return ''
    }
}

export const saveDraft = (issue: CreateIssueFields) => {
    localStorage.setItem(draftKey, JSON.stringify(issue));
}
export const getDraft = () => {
   return JSON.parse(localStorage.getItem(draftKey)) as CreateIssueFields;
}

export const clearDraft = () => {
    localStorage.removeItem(draftKey);
}


