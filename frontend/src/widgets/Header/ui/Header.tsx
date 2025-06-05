import * as styles from "./header.module.scss";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__inner}>
                    <div className={styles.header__logo}></div>
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            <li className={styles.navItem}>
                                <NavLink
                                    className={styles.navLink}
                                    to="/"
                                >
                                    Список задач
                                </NavLink>
                            </li>
                            <li className={styles.navItem}>
                                <NavLink
                                    className={styles.navLink}
                                    to="/"
                                >
                                    Список досок
                                </NavLink>
                            </li>
                            <button>Создать задачу</button>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};
