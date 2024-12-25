"use client";

import React, { Suspense } from "react";
import styles from "./page.module.css";
import { useSearchParams, redirect } from "next/navigation";

function StudiesPage() {
    return <div className={styles.page}>
        {/* ######################################### Intro ######################################### */}
        <div className={styles.section}>
            <span className={styles.darkerFont}>@dataclass</span>
            <span className={styles.darkerFont}>class BackgroundItem:</span>
            <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}self.university: str = university</span>
            <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}self.degree: str = degree</span>
            <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}self.major: str = major</span>
            <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}self.minor: str = minor</span>
            <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}self.graduation_date: Optional[date] = graduation_date</span>
            <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}self.subjects: Dict[str; List[str]] = subjects</span>
            <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}self.overall_average: float = overall_average</span>
            <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}self.categorized_average: Dict[str; float] = categorized_average</span>
            <span
                className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}self.transcript: str = transcript</span>
            <span><br/></span>
        </div>
        <div className={styles.section}>
            <span className={styles.darkerFont}>studies: BackgroundItem = BackgroundItem(</span>
            <div className={styles.line} id={"where"}>
                <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}university="</span>
                <span>University of Zurich</span>
                <span className={styles.darkerFont}>",</span>
            </div>
            <div className={styles.line} id={"what"}>
                <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}degree="</span>
                <span>Bachelor of Science</span>
                <span className={styles.darkerFont}>",</span>
            </div>
            <div className={styles.line}>
                <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}major="</span>
                <span>Computer Science</span>
                <span className={styles.darkerFont}>",</span>
            </div>
            <div className={styles.line}>
                <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}minor="</span>
                <span>Astrophysics</span>
                <span className={styles.darkerFont}>",</span>
            </div>
            <div className={styles.line} id={"when"}>
                <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}graduation_date=</span>
                <span>None</span>
                <span className={styles.darkerFont}>,</span>
            </div>
            <div className={styles.line}>
                <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}subjects={"{"} major=["</span>
                <span>Subject</span>
                <span className={styles.darkerFont}>", "</span>
                <span>Subject</span>
                <span className={styles.darkerFont}>", "</span>
                <span>Subject</span>
                <span className={styles.darkerFont}>", "</span>
                <span>Subject</span>
                <span className={styles.darkerFont}>", "</span>
                <span>Subject</span>
                <span className={styles.darkerFont}>", "</span>
                <span>Subject</span>
                <span className={styles.darkerFont}>", "</span>
                <span>Subject</span>
                <span className={styles.darkerFont}>",</span>
            </div>
            <div className={styles.line}>
                <span className={styles.darkerFont}>{Array(22).fill('\u00A0').join('')}"</span>
                <span>Subject</span>
                <span className={styles.darkerFont}>", "</span>
                <span>Subject</span>
                <span className={styles.darkerFont}>", "</span>
                <span>Subject</span>
                <span className={styles.darkerFont}>", "</span>
                <span>Subject</span>
                <span className={styles.darkerFont}>", "</span>
                <span>Subject</span>
                <span className={styles.darkerFont}>", "</span>
                <span>Subject</span>
                <span className={styles.darkerFont}>", "</span>
                <span>Subject</span>
                <span className={styles.darkerFont}>",</span>
                <span className={styles.darkerFont}>],</span>
            </div>
            <div className={styles.line}>
                <span className={styles.darkerFont}>{Array(15).fill('\u00A0').join('')}minor=["</span>
                <span>Subject</span>
                <span className={styles.darkerFont}>", "</span>
                <span>Subject</span>
                <span className={styles.darkerFont}>", "</span>
                <span>Subject</span>
                <span className={styles.darkerFont}>", "</span>
                <span>Subject</span>
                <span className={styles.darkerFont}>", "</span>
                <span>Subject</span>
                <span className={styles.darkerFont}>", "</span>
                <span>Subject</span>
                <span className={styles.darkerFont}>", "</span>
                <span>Subject</span>
                <span className={styles.darkerFont}>",</span>
                <span className={styles.darkerFont}>],</span>
            </div>
            <div className={styles.line}>
                <span className={styles.darkerFont}>{Array(13).fill('\u00A0').join('')}{"}"},</span>
            </div>
            <div className={styles.line} id={"how"}>
                <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}overall_average=</span>
                <span>10</span>
            </div>
            <div className={styles.line}>
                <span
                    className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}categorized_average={"{"}"category_one"=</span>
                <span>10</span>
                <span className={styles.darkerFont}>, "category_two"=</span>
                <span>10</span>
                <span className={styles.darkerFont}>, "category_three"=</span>
                <span>10</span>
                <span className={styles.darkerFont}>, "category_four"=</span>
                <span>10</span>
                <span className={styles.darkerFont}>,{"}"}</span>
            </div>
            <div className={styles.line}>
                <span className={styles.darkerFont}>{Array(4).fill('\u00A0').join('')}transcript="</span>
                <a className={styles.linkExternal}>transcript</a>
                <span className={styles.darkerFont}>"</span>
            </div>
            <span className={styles.darkerFont}>)</span>
        </div>
    </div>;
}

function SSDPage() {
    return <div className={styles.page}>Welcome to the SSD section</div>;
}

const pages: Record<string, React.FC | undefined> = {
    studies: StudiesPage,
    ssd: SSDPage,
};

function Content() {
    const searchParams = useSearchParams();
    const background = searchParams?.get("background");

    if (!background) {
        redirect("/");
    }

    const PageComponent = pages[background];
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
