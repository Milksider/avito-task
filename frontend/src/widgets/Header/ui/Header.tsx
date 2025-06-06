import * as styles from './header.module.scss';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { CreateTaskModal } from '@/widgets/CreateTaskModal';
import { useState } from 'react';

export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(prev => !prev);
    }

    return (
        <>
            <header className={styles.header}>
                <div>
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            <li className={styles.navItem}>
                                <NavLink
                                    className={styles.navLink}
                                    to='/issues'
                                >
                                    Список задач
                                </NavLink>
                            </li>
                            <li className={styles.navItem}>
                                <NavLink
                                    className={styles.navLink}
                                    to='/boards'
                                >
                                    Список досок
                                </NavLink>
                            </li>
                        </ul>
                        <Button
                            variant="outlined"
                            onClick={toggleModal}
                        >
                            Создать задачу
                        </Button>
                    </nav>
                </div>
            </header>
            <CreateTaskModal isOpen={isModalOpen} onClose={toggleModal} />
        </>
    );
};
