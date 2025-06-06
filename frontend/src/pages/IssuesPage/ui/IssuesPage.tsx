import * as styles from './IssuesPage.sx';
import { Box } from '@mui/material';
import { useAppDispatch } from '@/shared/hooks';
import { useEffect } from 'react';
import { fetchIssuesList } from '@/app/providers/store/slices/IssuesSlice/api/fetchIssuesList';
import { useSelector } from 'react-redux';
import { selectFilteredIssues } from '@/app/providers/store/slices/IssuesSlice/selectors';
import { SearchPanel } from '@/pages/IssuesPage/ui/SearchPanel/ui/SearchPanel';
import { Issue } from '@/widgets/Issue';

const IssuesPage = () => {
    const dispatch = useAppDispatch();
    const issues = useSelector(selectFilteredIssues);

    useEffect(() => {
        dispatch(fetchIssuesList({}))
    }, [dispatch, fetchIssuesList]);

    return (
        <Box>
            <SearchPanel />
            <Box sx={styles.issuesWrapper}>
                {issues.map(({boardId,boardName,id,description,status,title,priority,assignee}) =>
                    <Issue
                        key={id}
                        boardId={boardId}
                        description={description}
                        title={title}
                        assignee={assignee}
                        boardName={boardName}
                        id={id}
                        priority={priority}
                        status={status}
                    />
                )}
            </Box>
        </Box>
    );
};

export default IssuesPage;
