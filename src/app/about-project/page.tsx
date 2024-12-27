"use client";

import React, { Suspense } from "react";
import styles from "./page.module.css";
import { useSearchParams, redirect } from "next/navigation";

function whyKirbyy_website(){
    return(
        <div className={styles.page}>
            <span className={styles.darkerFont}>studies: Project = ProjectObject(</span>
            <div className={styles.line} id={"where"}>
                <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}description="""</span>
                <span>Some text</span>
                <span className={styles.darkerFont}>""",</span>
            </div>
            <div className={styles.line} id={"what"}>
                <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}degree={"{"}"languages":&nbsp;"</span>
                <span>Bachelor of Science</span>
                <span className={styles.darkerFont}>"{"}"},</span>
            </div>
            <span className={styles.darkerFont}>)</span>
        </div>
    );
}

function whyKirbyy_package() {
    return (
        <div className={styles.page}>
            <span className={styles.darkerFont}>studies: Project = ProjectObject(</span>
            <div className={styles.line} id={"where"}>
                <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}description="""</span>
                <span>Some text</span>
                <span className={styles.darkerFont}>""",</span>
            </div>
            <div className={styles.line} id={"what"}>
                <span
                    className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}degree={"{"}"languages":&nbsp;"</span>
                <span>Bachelor of Science</span>
                <span className={styles.darkerFont}>"{"}"},</span>
            </div>
            <span className={styles.darkerFont}>)</span>
        </div>
    );
}

function nudelsoup() {
    return (
        <div className={styles.page}>
            <span className={styles.darkerFont}>studies: Project = ProjectObject(</span>
            <div className={styles.line} id={"where"}>
                <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}description="""</span>
                <span>Some text</span>
                <span className={styles.darkerFont}>""",</span>
            </div>
            <div className={styles.line} id={"what"}>
                <span
                    className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}degree={"{"}"languages":&nbsp;"</span>
                <span>Bachelor of Science</span>
                <span className={styles.darkerFont}>"{"}"},</span>
            </div>
            <span className={styles.darkerFont}>)</span>
        </div>
    );
}

function sundtrack() {
    return (
        <div className={styles.page}>
            <span className={styles.darkerFont}>studies: Project = ProjectObject(</span>
            <div className={styles.line} id={"where"}>
                <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}description="""</span>
                <span>Some text</span>
                <span className={styles.darkerFont}>""",</span>
            </div>
            <div className={styles.line} id={"what"}>
                <span
                    className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}degree={"{"}"languages":&nbsp;"</span>
                <span>Bachelor of Science</span>
                <span className={styles.darkerFont}>"{"}"},</span>
            </div>
            <span className={styles.darkerFont}>)</span>
        </div>
    );
}

function lgl() {
    return (
        <div className={styles.page}>
            <span className={styles.darkerFont}>studies: Project = ProjectObject(</span>
            <div className={styles.line} id={"where"}>
                <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}description="""</span>
                <span>Some text</span>
                <span className={styles.darkerFont}>""",</span>
            </div>
            <div className={styles.line} id={"what"}>
                <span
                    className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}degree={"{"}"languages":&nbsp;"</span>
                <span>Bachelor of Science</span>
                <span className={styles.darkerFont}>"{"}"},</span>
            </div>
            <span className={styles.darkerFont}>)</span>
        </div>
    );
}

const pages: Record<string, React.FC | undefined> = {
    package: whyKirbyy_package,
    website: whyKirbyy_website,
    nudelsoup: nudelsoup,
    sundtrack: sundtrack,
    lgl: lgl,
};

function Content() {
    const searchParams = useSearchParams();
    const project = searchParams?.get("project");

    if (!project) {
        redirect("/");
    }

    const PageComponent = pages[project];
    if (!PageComponent) {
        redirect("/404");
    }

    return <PageComponent/>;
}

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Content/>
        </Suspense>
    );
}