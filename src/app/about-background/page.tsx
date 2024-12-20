"use client";

import React, { Suspense } from "react";
import styles from "./page.module.css";
import { useSearchParams, redirect } from "next/navigation";

function Content() {
    const searchParams = useSearchParams();
    const background = searchParams?.get("background");

    if (!background) {
        redirect("/");
        return null;
    }

    if (background === "studies") {
        return <div className={styles.page}>studies</div>;
    } else if (background === "ssd") {
        return <div className={styles.page}>ssd</div>;
    } else {
        return <div className={styles.page}>page for: {background} does not exist</div>;
    }
}

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Content />
        </Suspense>
    );
}