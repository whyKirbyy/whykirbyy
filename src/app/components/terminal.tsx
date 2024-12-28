import React from "react";
import styles from "../../styles/components/terminal.module.css"

interface TerminalProps{
    setIsExpanded: () => void
    setIsHidden: () => void
    setIsToggled: () => void
    isToggled: boolean
}
{/*test*/}
const Terminal: React.FC<TerminalProps> = ({ setIsHidden, isToggled, setIsToggled}) => {
    return(
        <div className={`${styles.terminal} ${isToggled ? styles.terminalExpanded : ""}`} onClick={() => {if (!isToggled) {setIsToggled();}
        }}>
            {!isToggled && (
                <div>
                    click to hi
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsHidden();
                        }}
                        className={styles.terminalButton}
                    >
                        hide
                    </button>
                </div>

            )}
            {isToggled && (
                <div>
                    click to bye
                    <button className={styles.terminalButton} onClick={setIsToggled}>minimise</button>
                    <button className={styles.terminalButton} onClick={setIsHidden}>hide</button>
                </div>
            )}
        </div>
    );
}

export default Terminal