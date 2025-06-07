import { useEffect } from 'react';
import { useAppDispatch } from '@/shared/hooks';
import { useSelector } from 'react-redux';
import { Assigne } from '@/app/types';
import { getAssignees } from '@/app/providers/store/slices/AssigneeSlice/assigneeSlice';
import { fetchAssigneeList } from '@/app/providers/store/slices/AssigneeSlice/api/fetchAssigneeList';

export const useAssigneesList = (): Assigne[] => {
    const dispatch = useAppDispatch();
    const assignees = useSelector(getAssignees.selectAll);

    useEffect(() => {
        if (!assignees.length) {
            dispatch(fetchAssigneeList({}));
        }
    }, [assignees, fetchAssigneeList, dispatch]);

    return assignees || [];
}
