import * as React from "react";
import styles from "../../../styles/components/headers/aboutBackgroundHeader.module.css"
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
                        <NavigationSection options={["description", "technologies"]}/>
                        <span className={[styles.brackets, styles.darkerFont].join(" ")}>]</span>
                    </div>
                </div>
                <span className={styles.darkerFont}>{"}"}<br/><br/></span>
            </div>
            <div className={styles.comment}>
                <span
                    className={styles.imports}># this is a page containing more detail about the project you selected</span>
                <span className={styles.imports}># to go back click on "home"</span>
                <span><br/><br/></span>
            </div>
            <div className={styles.imports}>
                <span className={styles.darkerFont}>@dataclass</span>
                <span className={styles.darkerFont}>class Project:</span>
                <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}self.description: str = description</span>
                <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}self.technologies: Dict[str, str] = technologies</span>
                <span><br/><br/></span>
            </div>
        </header>
    );
}

export default AboutLanguagesHeader