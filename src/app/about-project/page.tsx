"use client"
import React from "react";
import styles from "./page.module.css"
import {useSearchParams, redirect} from "next/navigation";

export default function Page() {
    let project
    const parameter = useSearchParams()

    if (!parameter){
        redirect("/")
    }else{
        project = parameter.get("project")
    }

    if (!project){
        redirect("/")
    } else if (project.toString() === "whyKirbyy-website"){
        return <div className={styles.page}>whyKirbyy-website</div>
    } else if (project.toString() === "whyKirbyy-package"){
        return <div className={styles.page}>whyKirbyy-package</div>
    }else if (project.toString() === "sundtrack"){
        return <div className={styles.page}>sundtrack</div>
    }else if (project.toString() === "nudelsoup"){
        return <div className={styles.page}>nudelsoup</div>
    }else if (project.toString() === "lgl"){
        return <div className={styles.page}>lgl</div>
    } else{
        return <div className={styles.page}>page for: {project} does not exist</div>
    }
}