import * as React from "react";
import styles from "../../../styles/components/headers/aboutBackgroundHeader.module.css"
import NavigationSection from "@/app/components/navigationSection";

const AboutLanguagesHeader: React.FC = () => {

    return (
        <header className={styles.header}>
            <div className={styles.imports}>
                <span className={styles.darkerFont}>from typing import Dict, List, Optional</span>
                <span className={styles.darkerFont}>from dataclasses import dataclass</span>
                <span className={styles.darkerFont}>from datetime import date</span>
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
                        <NavigationSection options={["what", "when", "where", "how"]}/>
                        <span className={[styles.brackets, styles.darkerFont].join(" ")}>]</span>
                    </div>
                </div>
                <span className={styles.darkerFont}>{"}"}<br/><br/></span>
            </div>
            <div className={styles.imports}>
                <div className={styles.comment}>
                    <span># this is a more detailed explanation of the background item you clicked on</span>
                    <span># to go back to the main page click on "home"</span>
                </div>
                <span><br/></span>
            </div>
        </header>
    );
}

export default AboutLanguagesHeader