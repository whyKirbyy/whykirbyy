"use client"
import styles from "./page.module.css";
import * as React from "react";
import BackToTopButton from "@/app/components/backToTopButton";

export default function Home() {
    return (
        <div className={styles.page}>
            <div className={styles.about}>
                <div className={styles.dictSection}>
                    <span
                        className={[styles.darkerFont, styles.decorators].join(" ")}>about_content: Dict[str, str] = {"{"}<br/><br/></span>
                    <div className={styles.textSection}>
                        <span
                            className={[styles.darkerFont, styles.decorators].join(" ")}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"content_1": """</span>
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
                            className={[styles.darkerFont, styles.decorators].join(" ")}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"content_2": """</span>
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
                <span className={[styles.darkerFont, styles.decorators].join(" ")}>{"}"}</span>
            </div>
            <BackToTopButton />
        </div>
    );
}
