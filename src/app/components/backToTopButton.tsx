import React from "react";
import styles from "../../styles/components/backToTopButton.module.css";

const BackToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button className={styles.backToTopButton} onClick={scrollToTop} title="Scroll to top">
            ↑
        </button>
    );
};

export default BackToTopButton;
