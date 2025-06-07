import * as styles from './Header.sx';
import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { useAppDispatch } from '@/shared/hooks';
import { toggleCreateIssueModal } from '@/app/providers/store/slices/CreateIssueModalSlice/createIssueModalSlice';
import AddIcon from '@mui/icons-material/Add';

export const Header = () => {
    const dispatch = useAppDispatch();

    const openCreateIssueModal = () => {
        dispatch(toggleCreateIssueModal({
            isOpen: true,
            issueData: null,
        }))
    }

    return (
        <>
            <Box component='header' sx={styles.header}>
                <Box>
                    <Box component='nav' sx={styles.nav}>
                        <Box component='ul' sx={styles.navList}>
                            <Box component='li' sx={styles.navItem(true)}>
                                <NavLink
                                    to='/issues'
                                    style={({ isActive }) => ({
                                        color: isActive ? '#ececef' : '#3a383f',
                                    })}
                                >
                                    Список задач
                                </NavLink>
                            </Box>
                            <Box component='li' sx={styles.navItem(true)}>
                                <NavLink
                                    to='/boards'
                                    style={({ isActive }) => ({
                                        color: isActive ? '#ececef' : '#3a383f',
                                    })}
                                >
                                    Список досок
                                </NavLink>
                            </Box>
                        </Box>
                        <Button
                            variant="outlined"
                            onClick={openCreateIssueModal}
                            sx={styles.createButton}
                        >
                            <Box sx={styles.btnText} >Создать задачу</Box>
                            <AddIcon sx={styles.btnIcon} />
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
