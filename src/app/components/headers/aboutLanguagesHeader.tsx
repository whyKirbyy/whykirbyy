import * as React from "react";
import styles from "../../../styles/components/headers/aboutLanguagesHeader.module.css"
import Link from "next/link";
import NavigationSection from "@/app/components/navigationSection";

const AboutLanguagesHeader: React.FC = () => {

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
                        <NavigationSection options={["tools", "db", "Python", "Java", "TypeScript", "C", "other"]} />
                        <span className={[styles.brackets, styles.darkerFont].join(" ")}>]</span>
                    </div>
                </div>
                <span className={styles.darkerFont}>{"}"}<br/><br/></span>
            </div>
        </header>
    );
}

export default AboutLanguagesHeader