import { Box, Button, Input, Menu, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { setFilterPriority, setSearchQuery } from '@/app/providers/store/slices/IssuesSlice/issuesSlice';
import { useAppDispatch } from '@/shared/hooks';
import React from 'react';
import { Priority } from '@/app/types';
import { useSelector } from 'react-redux';
import { selectFilterBoard, selectFilterPriority, selectSearchQuery } from '@/app/providers/store/slices/IssuesSlice/selectors';
import * as styles from './SearchPanel.sx';

export const SearchPanel = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const dispatch = useAppDispatch();
    const filterPriority = useSelector(selectFilterPriority);
    const filterBoard = useSelector(selectFilterBoard);
    const searchQuery = useSelector(selectSearchQuery);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(event.target.value))
    }

    const handleFilter = (event: SelectChangeEvent<unknown>) => {
        dispatch(setFilterPriority(event.target.value || null))
    }

    return (
        <Box sx={styles.wrapper}>
            <Input
                value={searchQuery}
                placeholder="Поиск по названию"
                onChange={handleSearch}
                sx={styles.defaultStyles}
            />

            <Box sx={styles.defaultStyles}>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Фильтры
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
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
                                value={filterPriority}
                                onChange={handleFilter}
                                variant="outlined"
                                sx={styles.select}
                            >
                                <MenuItem value=''>Сбросить фильтр</MenuItem>
                                <MenuItem value={Priority.LOW}>Низкий приоритет</MenuItem>
                                <MenuItem value={Priority.MEDIUM}>Средний приоритет</MenuItem>
                                <MenuItem value={Priority.HIGH}>Высокий приоритет</MenuItem>
                            </Select>
                        </Box>
                    </MenuItem>
                    <MenuItem>
                        <Box sx={styles.selectWrapper}>
                            Фильтрация по доске
                            <Select
                                labelId="filterSelect"
                                value={filterBoard}
                                onChange={handleFilter}
                                variant="outlined"
                                sx={styles.select}
                            >
                                <MenuItem value=''>Сбросить фильтр</MenuItem>
                                <MenuItem value={Priority.LOW}>Низкий приоритет</MenuItem>
                                <MenuItem value={Priority.MEDIUM}>Средний приоритет</MenuItem>
                                <MenuItem value={Priority.HIGH}>Высокий приоритет</MenuItem>
                            </Select>
                        </Box>
                    </MenuItem>
                </Menu>
            </Box>
        </Box>
    );
};
