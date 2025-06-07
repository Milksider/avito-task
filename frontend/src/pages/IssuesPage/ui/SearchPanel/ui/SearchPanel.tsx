import { Box, Button, Input, Menu, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { setFilterBoard, setFilterStatus, setSearchQuery } from '@/app/providers/store/slices/IssuesSlice/issuesSlice';
import { useAppDispatch } from '@/shared/hooks';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilterBoard, selectFilterStatus, selectSearchQuery } from '@/app/providers/store/slices/IssuesSlice/selectors';
import * as styles from './SearchPanel.sx';
import { useBoardsList } from '@/app/hooks/useBoardsList';
import { Statuses } from '@/app/types/global';
import { getStatusString } from '@/app/helpers';

export const SearchPanel = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const dispatch = useAppDispatch();
    const filterStatus = useSelector(selectFilterStatus);
    const filterBoard = useSelector(selectFilterBoard);
    const searchQuery = useSelector(selectSearchQuery);
    const boards = useBoardsList();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(event.target.value))
    }

    const handleFilterPriority = (event: SelectChangeEvent<unknown>) => {
        dispatch(setFilterStatus(event.target.value || null))
    }
    const handleFilterBoard = (event: SelectChangeEvent<unknown>) => {
        dispatch(setFilterBoard(event.target.value || null))
    }


    return (
        <Box sx={styles.wrapper}>
            <Input
                value={searchQuery}
                placeholder="Поиск по названию/исполнителю"
                onChange={handleSearch}
                sx={styles.input}
            />

            <Box sx={styles.filtersButton}>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={styles.triggerButton}
                >
                    Фильтры
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    sx={styles.menu}
                    slotProps={{
                        list: {
                            'aria-labelledby': 'basic-button',
                        },
                    }}
                >
                    <MenuItem>
                        <Box sx={styles.selectWrapper}>
                            Фильтрация по приоритетности
                            <Select
                                labelId="filterSelect"
                                value={filterStatus}
                                onChange={handleFilterPriority}
                                variant="outlined"
                                sx={styles.select}
                            >
                                <MenuItem value=''>Сбросить фильтр</MenuItem>
                                <MenuItem value={Statuses.BACKLOG}>{getStatusString(Statuses.BACKLOG)}</MenuItem>
                                <MenuItem value={Statuses.IN_PROGRESS}>{getStatusString(Statuses.IN_PROGRESS)}</MenuItem>
                                <MenuItem value={Statuses.DONE}>{getStatusString(Statuses.DONE)}</MenuItem>
                            </Select>
                        </Box>
                    </MenuItem>
                    <MenuItem>
                        <Box sx={styles.selectWrapper}>
                            Фильтрация по доске
                            <Select
                                labelId="filterSelect"
                                value={filterBoard}
                                onChange={handleFilterBoard}
                                variant="outlined"
                                sx={styles.select}
                            >
                                <MenuItem value=''>Сбросить фильтр</MenuItem>
                                {boards.map(board => <MenuItem value={board.id}>{board.name}</MenuItem>)}
                            </Select>
                        </Box>
                    </MenuItem>
                </Menu>
            </Box>
        </Box>
    );
};
