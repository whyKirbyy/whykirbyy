"use client";

import React, { Suspense } from "react";
import styles from "./page.module.css";
import { useSearchParams, redirect } from "next/navigation";

function ProjectContent() {
    const searchParams = useSearchParams();
    const project = searchParams?.get("project");

    if (!project) {
        redirect("/");
        return null;
    }

    switch (project.toString()) {
        case "whyKirbyy-website":
            return <div className={styles.page}>whyKirbyy-website</div>;
        case "whyKirbyy-package":
            return <div className={styles.page}>whyKirbyy-package</div>;
        case "sundtrack":
            return <div className={styles.page}>sundtrack</div>;
        case "nudelsoup":
            return <div className={styles.page}>nudelsoup</div>;
        case "lgl":
            return <div className={styles.page}>lgl</div>;
        default:
            return (
                <div className={styles.page}>page for: {project} does not exist</div>
            );
    }
}

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProjectContent />
        </Suspense>
    );
}