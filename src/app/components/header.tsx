import * as React from "react";
import styles from "../../styles/components/header.module.css";

const Header: React.FC = () => {
    const navOptions = ["home", "projects", "experience"];

    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <p className={styles.mainTitle}>whyKirbyy</p>
                <p className={styles.subTitle}>name: str = Tim</p>
            </div>
            <nav>
                <div className={styles.navList}>
                    <div className={styles.navItem}>
                        <span className={styles.key}>{"{"} </span>
                        <span className={styles.key}>nav_options</span>
                        <span className={styles.key}>:&nbsp;</span>
                        <span className={styles.value}> </span>
                        <span className={styles.brackets}>[</span>
                        {navOptions.map((option, index) => (
                            <React.Fragment key={index}>
                                <a href={`/${option}`} className={styles.value}>
                                    "{option}"
                                </a>
                                {index < navOptions.length - 1 && <span>,&nbsp;</span>}
                            </React.Fragment>
                        ))}
                        <span className={styles.brackets}>]</span>
                        <span className={styles.key}>,&nbsp;</span>
                    </div>
                        <div className={styles.navItem}>
                            <span className={styles.key}>language_options</span>
                            <span className={styles.key}>:&nbsp;</span>
                            <span className={styles.value}>options</span>
                        </div>
                    <span className={styles.key}>{" }"}</span>
                </div>
            </nav>
        </header>
    );
};

export default Header;
