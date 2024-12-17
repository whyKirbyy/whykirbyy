import React, { useRef, useEffect, useState } from "react";
import { matchSorter } from "match-sorter";
import styles from "../../styles/components/searchPopup.module.css";
import Image from "next/image";

const commands = [
    "copy",
    "download --python",
    "python3 resume.py",
    "language --go",
    "language --java",
    "language --typescript",
    "language --python",
    "filler"
];

interface TerminalPopupProps{
    showTerminal: () => void
}

const SearchPopup: React.FC<TerminalPopupProps> = ({showTerminal}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [inputValue, setInputValue] = useState("");
    const [sortedCommands, setSortedCommands] = useState<string[]>(commands);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        const sorted = matchSorter(commands, inputValue, {
            threshold: matchSorter.rankings.NO_MATCH, // Include all commands
        });
        setSortedCommands(sorted);
    }, [inputValue]);

    const copyCode = () => {
        showTerminal()
    }

    const doThing = () => {
        showTerminal()
    }

    const doCommand = () => {
        showTerminal()
    }

    return (
        <div className={styles.terminal}>
            <input
                type="text"
                name="search"
                id="search"
                className={styles.searchbar}
                placeholder="Search for a command"
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <div className={styles.suggested}>
                {inputValue.trim() === "" ? (
                    <div className={styles.terminalItems}>
                        <div className={styles.actionButtons}>
                            <button className={styles.terminalButton} onClick={copyCode}>copy code</button>
                            <button className={styles.terminalButton} onClick={doThing}>download file</button>
                            <button className={styles.terminalButton} onClick={doThing}>change language</button>
                        </div>
                        <div className={styles.suggestedCommands}>
                            <span className={styles.suggestionTitle}>Suggested</span>
                            <div className={styles.suggestedItems}>
                                <div className={styles.suggestion} onClick={doThing}><span className={styles.suggestionText}><Image src={"/settings2.svg"} alt={"settings icon"} width={20} height={20} className={styles.icon} draggable={false} priority={true}/> Open Theme Picker</span></div>
                                <div className={styles.suggestion} onClick={doThing}><span className={styles.suggestionText}><Image src={"/python.svg"} alt={"python logo"} width={20} height={20} className={styles.icon} draggable={false} priority={true}/> Checkout whykirbyy PyPi</span></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={styles.commands}>
                        {sortedCommands.map((command, index) => (
                            <div onClick={doCommand} className={styles.commandItems} key={index}><div className={styles.commandText}>{command}</div></div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchPopup;
