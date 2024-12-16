import React, {useRef, useEffect} from "react";
import styles from "../../styles/components/terminalPopup.module.css"

const TerminalPopup: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const commands = ["copy", "pyhton3 resume.py", "language --go", "language --java", "language --typescript", "language --python"]

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className={styles.terminal}>
            <input type={"text"} name={"search"} id={"search"} className={styles.searchbar} placeholder={"Search for a command"} ref={inputRef}/>
            <br></br>
            <div><br/></div>
            <div className={styles.suggested}>suggested</div>
        </div>
    );
}

export default TerminalPopup