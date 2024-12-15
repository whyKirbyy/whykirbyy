"use client"
import styles from "./page.module.css";
import React, {useEffect, useState, useRef} from "react";
import BackToTopButton from "@/app/components/backToTopButton";
import TerminalPopup from "@/app/components/terminalPopup";

export default function Home() {
    const [showTerminal, setShowTerminal] = useState(false)
    const terminalRef= useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLDivElement | null>(null);

    const notShowTerminal = () => {
        setShowTerminal((prev) => !prev);
    };

    useEffect(() => {
        if (showTerminal) {
            document.body.style.overflow = "hidden";
        }else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showTerminal]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                terminalRef.current && !terminalRef.current.contains(event.target as Node) &&
                buttonRef.current && !buttonRef.current.contains(event.target as Node)
            ) {
                setShowTerminal(false);
            }
        };

        if (showTerminal) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showTerminal]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if ((event.metaKey || event.ctrlKey) && event.key === "j") {
                setShowTerminal((prev) => !prev);
            }

            if (event.key === "Escape" && showTerminal) {
                setShowTerminal(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [showTerminal]);

    return (
        <div className={styles.page}>
            {/*##################################################-> Section about<-#############################################*/}
            <section id={"about"} className={styles.about}>
                <div className={styles.dictSection}>
                    <span className={[styles.darkerFont, styles.decorators].join(" ")}>about_content: Dict[str, Union[str, List[str], Dict[str, str]]] = {"{"}<br/></span>
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
                                <span className={[styles.darkerFont].join(" ")}>""", <br/></span>
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
                                <span className={[styles.darkerFont].join(" ")}>[</span>
                                <span className={styles.text}>
                                    <span className={styles.darkerFont}>"</span>
                                    Python
                                    <span className={styles.darkerFont}>",&nbsp;</span>
                                    <span className={styles.darkerFont}>"</span>
                                    Java
                                    <span className={styles.darkerFont}>",&nbsp;</span>
                                    <span className={styles.darkerFont}>"</span>
                                    TypeScript
                                    <span className={styles.darkerFont}>",&nbsp;</span>
                                    <span className={styles.darkerFont}>"</span>
                                    C
                                    <span className={styles.darkerFont}>",&nbsp;</span>
                                    <span className={styles.darkerFont}>"</span>
                                    <a className={styles.linkInternal}>more</a>
                                    <span className={styles.darkerFont}>"</span>
                                </span>
                                <span className={[styles.darkerFont].join(" ")}>],</span>
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
                                <span className={[styles.darkerFont].join(" ")}>{"{"}</span>
                                <span className={styles.text}>
                                    <span className={styles.darkerFont}>"github_link":&nbsp;</span>
                                    <span className={styles.darkerFont}>"</span><a href={"https://github.com/whyKirbyy"} className={styles.linkExternal}>github</a><span className={styles.darkerFont}>",&nbsp;</span>
                                </span>
                                <span className={styles.text}>
                                    <span className={styles.darkerFont}>"resume_download":&nbsp;</span>
                                    <span className={styles.darkerFont}>"</span><a href={"/resume.pdf"} download={"resume_Tim_Schmid.pdf"} className={styles.linkExternal}>resume</a><span
                                    className={styles.darkerFont}>",&nbsp;</span>
                                </span>
                                <span className={[styles.darkerFont].join(" ")}>{"}"},</span>
                            </div>
                        </div>
                    </div>
                </div>
                <span className={[styles.darkerFont, styles.decorators].join(" ")}>{"}"}</span>
            </section>
            <div><br/><br/></div>
            {/*##################################################-> Section Projects<-#############################################*/}
            <section id={"projects"} className={styles.projects}>
                <span className={[styles.darkerFont, styles.decorators].join(" ")}>@dataclass<br/></span>
                <span className={[styles.darkerFont, styles.decorators].join(" ")}>class Project:<br/></span>
                <span className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}self.name: str = name<br/></span>
                <span className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}self.details: str = details<br/></span>
                <span className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}self.tech_stack: List[str] = tech_stack<br/></span>
                <span className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}self.links: List[str] = links<br/></span>
                <span className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}self.status: str = status<br/><br/></span>
                <span
                    className={[styles.darkerFont, styles.decorators].join(" ")}>projects_content: List[Project] = [<br/></span>
                {/*-------------------New Project-------------------*/}
                <span className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}Project(<br/></span>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}name="
                    </div>
                    <div className={styles.text}><a className={styles.linkInternal} href="">whyKirbyy website</a>
                    </div>
                    <div className={`${styles.darkerFont} ${styles.decorators}`}>",<br/></div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}details="""
                    </div>
                    <div className={styles.text}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua. At vero eos et accusam et
                        justo duo dolores et ea rebum.
                        <span className={[styles.darkerFont].join(" ")}>""", <br/></span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}tech_stack=["
                    </div>
                    <div className={styles.text}>
                        Python
                        <span className={styles.darkerFont}>", "</span>
                        Flask
                        <span className={styles.darkerFont}>", "</span>
                        JavaScript
                        <span className={styles.darkerFont}>", "</span>
                        HTML
                        <span className={styles.darkerFont}>", "</span>
                        CSS
                        <span className={styles.darkerFont}>"],</span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}links=["
                    </div>
                    <div className={styles.text}>
                        <a className={styles.linkExternal} href="https://www.whyirbyy.ch" target="_blank"
                           rel="noopener noreferrer">whyKirbyy.ch</a>
                        <span className={[styles.darkerFont].join(" ")}>"], <br/></span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}status="
                    </div>
                    <div className={styles.text}>
                        completed
                        <span className={[styles.darkerFont].join(" ")}>", <br/></span>
                    </div>
                </div>
                <span
                    className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}),<br/><br/></span>
                {/*-------------------New Project-------------------*/}
                <span className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}Project(<br/></span>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}name="
                    </div>
                    <div className={styles.text}><a className={styles.linkInternal} href="">whyKirbyy package</a>
                    </div>
                    <div className={`${styles.darkerFont} ${styles.decorators}`}>",<br/></div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}details="""
                    </div>
                    <div className={styles.text}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua. At vero eos et accusam et
                        justo duo dolores et ea rebum.
                        <span className={[styles.darkerFont].join(" ")}>""", <br/></span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}tech_stack=["
                    </div>
                    <div className={styles.text}>
                        Python
                        <span className={styles.darkerFont}>", "</span>
                        Flask
                        <span className={styles.darkerFont}>", "</span>
                        JavaScript
                        <span className={styles.darkerFont}>", "</span>
                        HTML
                        <span className={styles.darkerFont}>", "</span>
                        CSS
                        <span className={styles.darkerFont}>"],</span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}links=["
                    </div>
                    <div className={styles.text}>
                        <a className={styles.linkExternal} href="" target="_blank"
                           rel="noopener noreferrer">whyKirbyy package github</a>
                        <span className={[styles.darkerFont].join(" ")}>"], <br/></span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}status="
                    </div>
                    <div className={styles.text}>
                        completed
                        <span className={[styles.darkerFont].join(" ")}>", <br/></span>
                    </div>
                </div>
                <span
                    className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}),<br/><br/></span>
                {/*-------------------New Project-------------------*/}
                <span className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}Project(<br/></span>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}name="
                    </div>
                    <div className={styles.text}><a className={styles.linkInternal} href="">nudelsoup</a>
                    </div>
                    <div className={`${styles.darkerFont} ${styles.decorators}`}>",<br/></div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}details="""
                    </div>
                    <div className={styles.text}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua. At vero eos et accusam et
                        justo duo dolores et ea rebum.
                        <span className={[styles.darkerFont].join(" ")}>""", <br/></span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}tech_stack=["
                    </div>
                    <div className={styles.text}>
                        Python
                        <span className={styles.darkerFont}>", "</span>
                        Flask
                        <span className={styles.darkerFont}>", "</span>
                        JavaScript
                        <span className={styles.darkerFont}>", "</span>
                        HTML
                        <span className={styles.darkerFont}>", "</span>
                        CSS
                        <span className={styles.darkerFont}>"]</span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}links=["
                    </div>
                    <div className={styles.text}>
                        <a className={styles.linkExternal} href="https://www.nudelsoup.com" target="_blank"
                           rel="noopener noreferrer">nudelsoup.com</a>
                        <span className={[styles.darkerFont].join(" ")}>", "</span>
                        <a className={styles.linkExternal} href="https://www.nudelsoup.com" target="_blank"
                           rel="noopener noreferrer">github frontend</a>
                        <span className={[styles.darkerFont].join(" ")}>", "</span>
                        <a className={styles.linkExternal} href="https://www.nudelsoup.com" target="_blank"
                           rel="noopener noreferrer">github backend</a>
                        <span className={[styles.darkerFont].join(" ")}>"] , <br/></span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}status="
                    </div>
                    <div className={styles.text}>
                        work in progress
                        <span className={[styles.darkerFont].join(" ")}>", <br/></span>
                    </div>
                </div>
                <span
                    className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}),<br/><br/></span>
                {/*-------------------New Project-------------------*/}
                <span className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}Project(<br/></span>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}name="
                    </div>
                    <div className={styles.text}><a className={styles.linkInternal} href="">sundtrack</a>
                    </div>
                    <div className={`${styles.darkerFont} ${styles.decorators}`}>",<br/></div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}details="""
                    </div>
                    <div className={styles.text}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua. At vero eos et accusam et
                        justo duo dolores et ea rebum.
                        <span className={[styles.darkerFont].join(" ")}>""", <br/></span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}tech_stack=["
                    </div>
                    <div className={styles.text}>
                        Python
                        <span className={styles.darkerFont}>", "</span>
                        Flask
                        <span className={styles.darkerFont}>", "</span>
                        JavaScript
                        <span className={styles.darkerFont}>", "</span>
                        HTML
                        <span className={styles.darkerFont}>", "</span>
                        CSS
                        <span className={styles.darkerFont}>"]</span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}links=["
                    </div>
                    <div className={styles.text}>
                        <a className={styles.linkExternal} href="" target="_blank"
                           rel="noopener noreferrer">sundtrack.xyz</a>
                        <span className={[styles.darkerFont].join(" ")}>", "</span>
                        <a className={styles.linkExternal} href="" target="_blank"
                           rel="noopener noreferrer">github frontend</a>
                        <span className={[styles.darkerFont].join(" ")}>", "</span>
                        <a className={styles.linkExternal} href="" target="_blank"
                           rel="noopener noreferrer">github backend</a>
                        <span className={[styles.darkerFont].join(" ")}>"] , <br/></span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}status="
                    </div>
                    <div className={styles.text}>
                        work in progress
                        <span className={[styles.darkerFont].join(" ")}>", <br/></span>
                    </div>
                </div>
                <span className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}),<br/><br/></span>
                {/*-------------------New Project-------------------*/}
                <span className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}Project(<br/></span>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}name="
                    </div>
                    <div className={styles.text}><a className={styles.linkInternal} href="">Little German Language</a>
                    </div>
                    <div className={`${styles.darkerFont} ${styles.decorators}`}>",<br/></div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}details="""
                    </div>
                    <div className={styles.text}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua. At vero eos et accusam et
                        justo duo dolores et ea rebum.
                        <span className={[styles.darkerFont].join(" ")}>""", <br/></span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}tech_stack=["
                    </div>
                    <div className={styles.text}>
                        Python
                        <span className={styles.darkerFont}>", "</span>
                        Assembly
                        <span className={styles.darkerFont}>"]</span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}links=["
                    </div>
                    <div className={styles.text}>
                        <a className={styles.linkExternal} href="" target="_blank"
                           rel="noopener noreferrer">github</a>
                        <span className={[styles.darkerFont].join(" ")}>"], <br/></span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(8).fill('\u00A0').join('')}status="
                    </div>
                    <div className={styles.text}>
                        completed
                        <span className={[styles.darkerFont].join(" ")}>", <br/></span>
                    </div>
                </div>
                <span
                    className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}),<br/></span>

                <span className={`${styles.darkerFont} ${styles.decorators}`}>]</span>
            </section>
            <div><br/><br/></div>
            {/*##################################################-> Section Experience <-#############################################*/}
            <section id={"background"} className={styles.background}>
                <span className={styles.darkerFont}>background_graph: nx.DiGraph = nx.DiGraph()</span>
                {/* ----------------------------- new background ---------------------- */}
                <span className={styles.darkerFont}>background_graph.add_node(</span>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}"
                    </div>
                    <div className={styles.text}>
                        <a className={styles.linkInternal}>Software Engineering Internship</a>
                        <span className={[styles.darkerFont].join(" ")}>", <br/></span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}role="
                    </div>
                    <div className={styles.text}>
                        Software Engineering Intern
                        <span className={[styles.darkerFont].join(" ")}>", <br/></span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}organisation="
                    </div>
                    <div className={styles.text}>
                        ssd.ngo
                        <span className={[styles.darkerFont].join(" ")}>", <br/></span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}time_period={"{"}
                    </div>
                    <span className={[styles.darkerFont].join(" ")}>"start_date":&nbsp;"</span>
                    <div className={styles.text}>
                        01.01.2024
                    </div>
                    <span className={[styles.darkerFont].join(" ")}>", "end_date":&nbsp;"</span>
                    <div className={styles.text}>
                        01.03.2024
                    </div>
                    <span className={[styles.darkerFont].join(" ")}>"{"}"}, <br/></span>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}description="""
                    </div>
                    <div className={styles.text}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua.
                        <span className={[styles.darkerFont].join(" ")}>""", <br/></span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}tech_stack=["
                    </div>
                    <div className={styles.text}>Python</div>
                    <span className={styles.darkerFont}>", " <br/></span>
                    <div className={styles.text}>Python</div>
                    <span className={styles.darkerFont}>", " <br/></span>
                    <div className={styles.text}>Python</div>
                    <span className={styles.darkerFont}>", " <br/></span>
                    <div className={styles.text}>Python</div>
                    <span className={[styles.darkerFont].join(" ")}>"], <br/></span>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}reference="
                    </div>
                    <div className={styles.text}><a className={styles.linkExternal}>reference</a></div>
                    <div className={styles.darkerFont}>",</div>
                </div>
                <span className={styles.darkerFont}>)<br/><br/></span>
                {/* ----------------------------- new background ---------------------- */}
                <span className={styles.darkerFont}>background_graph.add_node(</span>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}"
                    </div>
                    <div className={styles.text}>
                        <a className={styles.linkInternal}>Studies</a>
                        <span className={[styles.darkerFont].join(" ")}>", <br/></span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}university="
                    </div>
                    <div className={styles.text}>
                        University of Zurich
                        <span className={[styles.darkerFont].join(" ")}>", <br/></span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}major="
                    </div>
                    <div className={styles.text}>
                        Computer Science
                        <span className={[styles.darkerFont].join(" ")}>", <br/></span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}minor="
                    </div>
                    <div className={styles.text}>
                        Astrophysics
                        <span className={[styles.darkerFont].join(" ")}>", <br/></span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}time_period={"{"}
                    </div>
                    <span className={[styles.darkerFont].join(" ")}>"start_date":&nbsp;"</span>
                    <div className={styles.text}>
                        01.01.2022
                    </div>
                    <span className={[styles.darkerFont].join(" ")}>", "end_date":&nbsp;"</span>
                    <div className={styles.text}>
                        01.03.2024
                    </div>
                    <span className={[styles.darkerFont].join(" ")}>"{"}"}, <br/></span>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}description="""
                    </div>
                    <div className={styles.text}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua.
                        <span className={[styles.darkerFont].join(" ")}>""", <br/></span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div
                        className={`${styles.darkerFont} ${styles.decorators}`}>{Array(4).fill('\u00A0').join('')}grades{"{"}"
                    </div>
                    <span className={[styles.darkerFont].join(" ")}>overall":&nbsp;<br/></span>
                    <div className={styles.text}>
                        5
                    </div>
                    <span className={[styles.darkerFont].join(" ")}>, "subject":&nbsp;<br/></span>
                    <div className={styles.text}>
                        5
                    </div>
                    <span className={[styles.darkerFont].join(" ")}>, "subject":&nbsp;<br/></span>
                    <div className={styles.text}>
                        5
                    </div>
                    <span className={[styles.darkerFont].join(" ")}>{"}"},<br/></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}transcript_of_records="</span>
                    <span className={styles.text}><a href={"/transcript_of_records.pdf"} download={"records_Tim_Schmid.pdf"} className={styles.linkExternal}>transcript of records</a></span>
                    <span className={styles.darkerFont}>",</span>
                </div>
                <span className={styles.darkerFont}>)</span>
                {/* ----------------------------- backgrounds done ---------------------- */}
                <div><br/></div>
                <div className={styles.darkerFont}>background_graph.add_edge("Studies", "Software Engineering Intern",
                    relationship="mandatory internship")
                </div>
            </section>
            <div><br/><br/></div>
            {/*##################################################-> Section Experience <-#############################################*/}
            <section id={"info"} className={styles.info}>
                <div className={styles.line}>
                    <span className={styles.darkerFont}>info_content: str = """</span>
                    <span className={styles.text}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        <span className={[styles.darkerFont].join(" ")}>"""<br/></span>
                    </span>
                </div>
            </section>
            <div><br/><br/></div>
            {/*##################################################-> Section Experience <-#############################################*/}
            <section className={styles.info}>
                <div className={[styles.line, styles.darkerFont].join(" ")}>
                    if __name__ == "__main__":
                </div>
                <div className={[styles.line, styles.darkerFont].join(" ")}>
                    {Array(4).fill('\u00A0').join('')}whykirbyy_instance.set_about(about_content)
                </div>
                <div className={[styles.line, styles.darkerFont].join(" ")}>
                    {Array(4).fill('\u00A0').join('')}whykirbyy_instance.set_projects(projects_content)
                </div>
                <div className={[styles.line, styles.darkerFont].join(" ")}>
                    {Array(4).fill('\u00A0').join('')}whykirbyy_instance.set_background(background_graph)
                </div>
                <div className={[styles.line, styles.darkerFont].join(" ")}>
                    {Array(4).fill('\u00A0').join('')}whykirbyy_instance.set_info(info_content)
                </div>
                <div className={[styles.line, styles.darkerFont].join(" ")}>
                    {Array(4).fill('\u00A0').join('')}<br/>
                </div>
                <div className={[styles.line, styles.darkerFont].join(" ")}>
                    {Array(4).fill('\u00A0').join('')}resume = whykirbyy_instance.resume()
                </div>
                <div className={[styles.line, styles.darkerFont].join(" ")}>
                    {Array(4).fill('\u00A0').join('')}<br/>
                </div>
            </section>
            {showTerminal && (
                <div ref={terminalRef}>
                    <TerminalPopup />
                </div>
            )}
            <div ref={buttonRef}>
                <BackToTopButton setShowTerminal={notShowTerminal}/>
            </div>
        </div>
    );
}
