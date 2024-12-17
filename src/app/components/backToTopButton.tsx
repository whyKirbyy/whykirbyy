import React, { useState } from "react";
import styles from "../../styles/components/backToTopButton.module.css";
import Image from "next/image";

interface menuButtonProps{
    setShowSearch: () => void
    setShowTerminal: () => void
    isTerminalToggled: boolean
    isTerminalHidden: boolean
}

const menuButton: React.FC<menuButtonProps> = ({setShowSearch, isTerminalToggled, isTerminalHidden, setShowTerminal}) => {
    const [isHovered, setIsHovered] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: isHovered ? "smooth" : "auto",
        });
    };

    const copyPageUrl = () => {
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                console.log("URL copied to clipboard");
            })
            .catch(err => {
                console.error("Failed to copy URL: ", err);
            });
    };

    return (
        <div
            className={`${styles.buttonContainer} ${isTerminalToggled ? styles.terminalIsExpanded : ""} ${isTerminalHidden ? styles.terminalIsHidden : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {!isHovered ? (
                <button
                    className={styles.backToTopButton}
                    onClick={scrollToTop}
                    title="Scroll to top"
                >
                    <Image src="/settings.svg" alt="settings icon" width={24} height={24} className={styles.icon} draggable="false"/>
                </button>
            ) : (
                <div className={styles.pillButton}>
                    <button
                        className={`${styles.pillButtonSection} ${styles.copySection}`}
                        onClick={setShowTerminal}
                    >
                        <Image src="/terminal.svg" alt="terminal icon" width={24} height={24} className={styles.icon} draggable={false} priority={true}/>
                    </button>
                    <button
                        className={`${styles.pillButtonSection} ${styles.topSection}`}
                        onClick={scrollToTop}
                    >
                        <Image src="/arrow.svg" alt="arrow icon" width={24} height={24} className={styles.icon} draggable={false} priority={true}/>
                    </button>
                    <button
                        className={`${styles.pillButtonSection} ${styles.arrowSection}`} onClick={setShowSearch}
                    >
                        <Image src="/search.svg" alt="search commands icon" width={24} height={24} className={styles.icon} draggable={false} priority={true}/>
                    </button>
                </div>
            )}
        </div>
    );
};

export default menuButton;
