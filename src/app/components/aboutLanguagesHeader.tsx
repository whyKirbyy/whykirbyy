import * as React from "react";
import styles from "../../styles/components/aboutLanguagesHeader.module.css";
import Link from "next/link";

const AboutLanguagesHeader: React.FC = () => {
    const navOptions = ["tools", "db", "Python", "Java", "TypeScript", "C", "other"];

    return (
        <header className={styles.header}>
            <div className={styles.imports}>
                <span className={styles.darkerFont}>from typing import Dict, List</span>
                <span className={styles.darkerFont}>from dataclasses import dataclass</span>
                <span><br/></span>
            </div>
            <div className={styles.navList}>
                <span
                    className={[styles.darkerFont].join(" ")}>NAVIGATION: Dict[str, List[str]] =&nbsp;{"{"}</span>
                <div className={styles.navItems}>
                    <div className={styles.navItem}>
                        <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}"nav_options"</span>
                        <span className={styles.darkerFont}>:&nbsp;</span>
                        <span className={[styles.brackets, styles.darkerFont].join(" ")}>[</span>
                        <Link className={styles.value} href={"/"}>
                            <span className={styles.darkerFont}>"</span>
                            <span>home</span>
                            <span className={styles.darkerFont}>",&nbsp;</span>
                        </Link>
                        {navOptions.map((option, index) => (
                            <React.Fragment key={index}>
                                <div className={styles.darkerFont}>"</div>
                                <a href={`#${option}`} className={styles.value}>
                                    {option}
                                </a>
                                <div className={styles.darkerFont}>"</div>
                                {index < navOptions.length - 1 &&
                                    <span className={styles.darkerFont}>,&nbsp;</span>}
                            </React.Fragment>
                        ))}
                        <span className={[styles.brackets, styles.darkerFont].join(" ")}>]</span>
                    </div>
                </div>
                <span className={styles.darkerFont}>{"}"}<br/><br/></span>
            </div>
        </header>
    );
}

export default AboutLanguagesHeader