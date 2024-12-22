import React from "react";
import styles from "./notFound.module.css";
import Link from "next/link";

const Error404: React.FC = () => {
    return (
        <div className={styles.page}>
            <div className={styles.line}>
                <span className={styles.darkerFont}>from typing import List</span>
            </div>
            <br/>
            <div className={styles.line}>
                <span className={styles.darkerFont}>class&nbsp;</span>
                <span>PageNotFoundError</span>
                <span className={styles.darkerFont}>(Exception):</span>
            </div>
            <div className={styles.line}>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className={styles.darkerFont}>"""</span>
            </div>
            <div className={styles.line}>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>An exception indicating that a certain page was not found.</span>
            </div>
            <div className={styles.line}>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className={styles.darkerFont}>"""</span>
            </div>
            <br/>
            <div className={styles.line}>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className={styles.darkerFont}>navigation_options: List[str] = ["</span>
                <Link href={"/"} className={styles.internalLink}>home</Link>
                <span className={styles.darkerFont}>"]</span>
            </div>
            <div className={styles.line}>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className={styles.darkerFont}>code: int =&nbsp;</span>
                <span>404</span>
            </div>
            <br/>
            <div className={styles.line}>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className={styles.darkerFont}>def __init__(self, message: str, navigation_options: List[str] = None) -{">"} None:</span>
            </div>
            <div className={styles.line}>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className={styles.darkerFont}>self.navigation_options = navigation_options or ["home"]</span>
            </div>
            <div className={styles.line}>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className={styles.darkerFont}>super().__init__(message)</span>
            </div>
            <br/>
            <div className={styles.line}>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className={styles.darkerFont}>def __str__(self) -{">"} str:</span>
            </div>
            <div className={styles.line}>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className={styles.darkerFont}>{"return f\"{super().__str__()} (code: {self.code}, navigation_options: {', '.join(self.navigation_options)})\""}</span>
            </div>
        </div>
    );
};

export default Error404;
