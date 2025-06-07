import { Assigne } from '@/app/types';
import { useAssigneesList } from '@/app/hooks/useAssigneesList';

export const useGetAssigneeById = (id: number): Assigne => {
    const assignees = useAssigneesList();
    console.log('fff');
    const currentAssignee = assignees.find(assignee => assignee.id === id);
    console.log('fasfsa');

    return currentAssignee || undefined;
}
