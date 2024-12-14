import * as React from "react";
import styles from "../../styles/components/header.module.css";

const Header: React.FC = () => {
    const navOptions = ["about", "projects", "background", "info"];

    return (
        <header className={styles.header}>
            <div className={styles.imports}>
                <span className={[styles.darkerFont, styles.titleSection].join(" ")}>from <span className={styles.mainTitle}>&nbsp;whykirbyy&nbsp;</span> import Whykirbyy</span>
                <span className={styles.darkerFont}>from typing import Dict, List, Union</span>
                <span className={styles.darkerFont}>from dataclasses import dataclass</span>
                <span className={styles.darkerFont}>import networkx as nx</span>
                <span><br/></span>
            </div>
            {/*<span className={[styles.darkerFont, styles.comment].join(" ")}># green text means a section in the website, blue text a external link or download</span>*/}
            <div className={styles.navList}>
                <span
                    className={[styles.darkerFont].join(" ")}>NAVIGATION: Dict[str, Union[List[str], str]] =&nbsp;{"{"}</span>
                <div className={styles.navItems}>
                    <div className={styles.navItem}>
                        <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}"nav_options"</span>
                        <span className={styles.darkerFont}>:&nbsp;</span>
                        <span className={[styles.brackets, styles.darkerFont].join(" ")}>[</span>
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
                        <span className={[styles.key, styles.darkerFont].join(" ")}>,&nbsp;</span>
                    </div>
                    <div className={styles.navItem}>
                        <span className={styles.darkerFont}>"language_options"</span>
                        <span className={styles.darkerFont}>:&nbsp;"</span>
                        <span className={styles.value}>options</span>
                        <span className={styles.darkerFont}>",</span>
                    </div>
                </div>
                <span className={styles.darkerFont}>{"}"}<br/><br/></span>
            </div>
            <div className={styles.imports}>
            <span className={[styles.subTitle, styles.darkerFont].join(" ")}>whykirbyy_instance = Whykirbyy()</span>
                <div>
                    <span className={[styles.subTitle, styles.darkerFont].join(" ")}>whykirbyy_instance.set_name(</span>
                    <span className={[styles.subTitle, styles.darkerFont].join(" ")}>"</span>
                    <span className={[styles.subTitle].join(" ")}>Tim Schmid</span>
                    <span className={[styles.subTitle, styles.darkerFont].join(" ")}>")</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
