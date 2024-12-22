import React from "react";
import styles from "../../styles/components/navigationSection.module.css"
import Link from "next/link";

interface NavigationSectionProps{
    options: string[]
}

const NavigationSection: React.FC<NavigationSectionProps> = ({options}) => {
    return(
        <div className={styles.navOptions}>
            <Link className={styles.value} href={"/"}>
                <span className={styles.darkerFont}>"</span>
                <span>home</span>
                <span className={styles.darkerFont}>",&nbsp;</span>
            </Link>
            {options.map((option, index) => (
                <React.Fragment key={index}>
                    <div className={styles.darkerFont}>"</div>
                    <a href={`#${option}`} className={styles.value}>
                        {option}
                    </a>
                    <div className={styles.darkerFont}>"</div>
                    {index < options.length - 1 &&
                        <span className={styles.darkerFont}>,&nbsp;</span>}
                </React.Fragment>
            ))}
        </div>
    );
}

export default NavigationSection