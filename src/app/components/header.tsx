import * as React from "react";
import styles from "../../styles/components/header.module.css";

const Header: React.FC = () => {
    const navOptions = ["about", "projects", "experience"];

    return (
        <header className={styles.header}>
            <div className={styles.imports}>
                <span className={styles.darkerFont}>from whyKirbyy import about, experience, projects, options</span>
                <div className={styles.mainTitle}>
                    <span className={styles.darkerFont}>import</span>
                    <span>&nbsp;whyKirbyy</span>
                </div>
                <span className={styles.darkerFont}>from typing import Dict, Any</span>
                <span className={styles.darkerFont}>import httpx</span>
                <span className={styles.darkerFont}><br/></span>
            </div>
            <div className={styles.navList}>
                <span className={[styles.darkerFont].join(" ")}>NAVIGATION: Dict[str, Any] =&nbsp;</span>
                <div className={styles.navItems}>
                    <div className={styles.navItem}>
                        <span className={styles.darkerFont}>{"{"} </span>
                        <span className={styles.darkerFont}>"nav_options"</span>
                        <span className={styles.darkerFont}>:&nbsp;</span>
                        <span className={styles.value}> </span>
                        <span className={[styles.brackets, styles.darkerFont].join(" ")}>[</span>
                        {navOptions.map((option, index) => (
                            <React.Fragment key={index}>
                                <a href={`#${option}`} className={styles.value}>
                                    {option}
                                </a>
                                {index < navOptions.length - 1 && <span className={styles.darkerFont}>,&nbsp;</span>}
                            </React.Fragment>
                        ))}
                        <span className={[styles.brackets, styles.darkerFont].join(" ")}>]</span>
                        <span className={[styles.key, styles.darkerFont].join(" ")}>,&nbsp;</span>
                    </div>
                    <div className={styles.navItem}>
                        <span className={styles.darkerFont}>"language_options"</span>
                        <span className={styles.darkerFont}>:&nbsp;</span>
                        <span className={styles.value}>options</span>
                    </div>
                    <span className={styles.darkerFont}>{" }"}</span>
                </div>
            </div>
            <div className={styles.imports}>
                <div>
                    <span className={[styles.subTitle, styles.darkerFont].join(" ")}>whyKirbyy.set_name(</span>
                    <span className={[styles.subTitle, styles.darkerFont].join(" ")}>"</span>
                    <span className={[styles.subTitle].join(" ")}>Tim Schmid</span>
                    <span className={[styles.subTitle, styles.darkerFont].join(" ")}>")</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
