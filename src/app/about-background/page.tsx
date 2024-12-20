"use client"
import React from "react";
import styles from "./page.module.css"
import {useSearchParams, redirect} from "next/navigation";

export default function Page() {
    let background
    const parameter = useSearchParams()

    if (!parameter){
        redirect("/")
    }else{
        background = parameter.get("background")
    }

    if (!background){
        redirect("/")
    } else if (background.toString() === "studies"){
        return <div className={styles.page}>education</div>
    } else if (background.toString() === "ssd"){
        return <div className={styles.page}>ssd</div>
    }else{
       return <div className={styles.page}>page for: {background} does not exist</div>
    }
}