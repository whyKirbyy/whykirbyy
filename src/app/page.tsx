"use client"
import styles from "./page.module.css";
import * as React from "react";
import BackToTopButton from "@/app/components/backToTopButton";

export default function Home() {
    return (
        <div className={styles.page}>
            <section id={"about"} className={styles.about}>
                <div className={styles.dictSection}>
                    <span className={[styles.darkerFont, styles.decorators].join(" ")}>about_content: Dict[str, Union[str, List[str], Dict[str, str]]] = {"{"}<br/><br/></span>
                    <div className={styles.textSection}>
                        <span
                            className={[styles.darkerFont, styles.decorators].join(" ")}>&nbsp;&nbsp;&nbsp;&nbsp;"tim_schmid": """</span>
                        <div>
                            <div className={styles.textBlock}>
                            <span className={styles.text}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                <span className={[styles.darkerFont].join(" ")}>""", <br/><br/></span>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.dictSection}>
                    <div className={styles.textSection}>
                        <span
                            className={[styles.darkerFont, styles.decorators].join(" ")}>&nbsp;&nbsp;&nbsp;&nbsp;"tech_stack":&nbsp;</span>
                        <div>
                            <div className={styles.textBlock}>
                            <span className={styles.text}>
                                []
                                <span className={[styles.darkerFont].join(" ")}>, <br/><br/></span>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.dictSection}>
                    <div className={styles.textSection}>
                        <span
                            className={[styles.darkerFont, styles.decorators].join(" ")}>&nbsp;&nbsp;&nbsp;&nbsp;"links":&nbsp;</span>
                        <div>
                            <div className={styles.textBlock}>
                            <span className={styles.text}>
                                {"{"}{"}"}
                                <span className={[styles.darkerFont].join(" ")}>, <br/><br/></span>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                <span className={[styles.darkerFont, styles.decorators].join(" ")}>{"}"}</span>
            </section>
            <div><br/><br/></div>
            <section id={"projects"} className={styles.projects}>
                <span className={[styles.darkerFont, styles.decorators].join(" ")}>@dataclass<br/></span>
                <span className={[styles.darkerFont, styles.decorators].join(" ")}>class Project:<br/></span>
                <span className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}self.name: str = name<br/></span>
                <span className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}self.details: str = details<br/></span>
                <span className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}self.tech_stack: str = tech_stack<br/></span>
                <span className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}self.link: str = link<br/></span>
                <span className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}self.status: str = status<br/><br/><br/></span>
                <span
                    className={[styles.darkerFont, styles.decorators].join(" ")}>projects_content: List[Project] = [<br/><br/></span>
                <span className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}Project(<br/><br/></span>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}name="
                    </div>
                    <div className={styles.text}>Portfolio Website</div>
                    <div className={`${styles.darkerFont} ${styles.decorators}`}>",<br/><br/></div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}details="
                    </div>
                    <div className={styles.text}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua. At vero eos et accusam et
                        justo duo dolores et ea rebum.
                        <span className={[styles.darkerFont].join(" ")}>", <br/><br/></span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}tech_stack=["
                    </div>
                    <div className={styles.text}>
                        Python
                        <span className={[styles.darkerFont].join(" ")}>", "</span>
                        Flask
                        <span className={[styles.darkerFont].join(" ")}>", "</span>
                        JavaScript
                        <span className={[styles.darkerFont].join(" ")}>", "</span>
                        HTML
                        <span className={[styles.darkerFont].join(" ")}>", "</span>
                        CSS
                        <span className={[styles.darkerFont].join(" ")}>"], <br/><br/></span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}link="
                    </div>
                    <div className={styles.text}>
                        <a className={styles.link} href="https://www.whykirbyy.ch" target="_blank"
                           rel="noopener noreferrer">whykirbyy.ch</a>
                        <span className={[styles.darkerFont].join(" ")}>", <br/><br/></span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}status="
                    </div>
                    <div className={styles.text}>
                        completed
                        <span className={[styles.darkerFont].join(" ")}>", <br/><br/></span>
                    </div>
                </div>
                <span className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')})<br/><br/></span>
            </section>
            <BackToTopButton/>
        </div>
    );
}
