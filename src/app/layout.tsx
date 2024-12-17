"use client"
import React from "react";
import {usePathname} from "next/navigation";
import "./globals.css";
import MainHeader from "./components/mainHeader"
import AboutLanguagesHeader from "@/app/components/aboutLanguagesHeader";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode; }>) {
    const pathname = usePathname()

    const headerChoice= () => {
        if (pathname === "/about-languages"){
            return <AboutLanguagesHeader />
        }

        return <MainHeader />
    }
    return (
        <html lang="en">
        <head>
            <title>whyKirbyy</title>
            <link rel="icon" href="/favicon.png" title={"favicon"}/>
        </head>
        <body>
        {headerChoice()}
        {children}
            </body>
        </html>
    );
}
