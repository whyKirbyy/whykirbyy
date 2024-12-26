"use client";

import React, { Suspense } from "react";
import styles from "./page.module.css";
import { useSearchParams, redirect } from "next/navigation";

function whyKirbyy_website(){
    return(
        <div className={styles.page}>
            Website
        </div>
    );
}

function whyKirbyy_package(){
    return(
        <div className={styles.page}>
            Package
        </div>
    );
}

function nudelsoup(){
    return(
        <div className={styles.page}>
            nudelsoup
        </div>
    );
}

function sundtrack(){
    return(
        <div className={styles.page}>
            sundtrack
        </div>
    );
}

function lgl() {
    return(
        <div className={styles.page}>
            lgl
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