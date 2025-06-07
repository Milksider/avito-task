import * as styles from './IssuesPage.sx';
import { Box } from '@mui/material';
import { useAppDispatch } from '@/shared/hooks';
import { useEffect } from 'react';
import { fetchIssuesList } from '@/app/providers/store/slices/IssuesSlice/api/fetchIssuesList';
import { useSelector } from 'react-redux';
import { selectFilteredIssues, selectIsLoading } from '@/app/providers/store/slices/IssuesSlice/selectors';
import { SearchPanel } from '@/pages/IssuesPage/ui/SearchPanel/ui/SearchPanel';
import { Issue } from '@/widgets/Issue';
import { toggleCreateIssueModal } from '@/app/providers/store/slices/CreateIssueModalSlice/createIssueModalSlice';
import { Issue as IssueType } from '@/app/types';
import LoopIcon from '@mui/icons-material/Loop';
import { loading } from '@/app/styles/variables';

const IssuesPage = () => {
    const dispatch = useAppDispatch();
    const issues = useSelector(selectFilteredIssues);
    const isLoading = useSelector(selectIsLoading);

    const openCreateIssueModal = (issueData: IssueType) => {
        dispatch(toggleCreateIssueModal({
            isOpen: true,
            issueData: issueData,
        }))
    }

    const onIssueClick = (issueData: IssueType) => {
        openCreateIssueModal(issueData)
    }

    useEffect(() => {
        dispatch(fetchIssuesList({}))
    }, [dispatch, fetchIssuesList]);

    return (
        <Box sx={styles.wrapper}>
            <SearchPanel />
            <Box sx={styles.issuesWrapper}>
                {isLoading && <LoopIcon sx={loading} />}
                {issues.map(({boardId,boardName,id,description,status,title,priority,assignee}) =>
                    <Box
                        onClick={() => onIssueClick({boardId,boardName,id,description,status,title,priority,assignee})}
                    >
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
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default IssuesPage;
