"use client"
import React from "react";
import {usePathname} from "next/navigation";
import "./globals.css";
import MainHeader from "./components/headers/mainHeader"
import AboutLanguagesHeader from "@/app/components/headers/aboutLanguagesHeader";
import AboutProjectHeader from "@/app/components/headers/aboutProjectHeader";
import AboutBackgroundHeader from "@/app/components/headers/aboutBackgroundHeader";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode; }>) {
    const pathname = usePathname()

    const headerChoice = () => {
        if (!pathname || pathname === "/") {
            return <MainHeader />;
        } else if (pathname === "/about-languages") {
            return <AboutLanguagesHeader />;
        } else if (pathname.search("/about-project") !== -1) {
            return <AboutProjectHeader />
        } else if (pathname.search("/about-background") !== -1) {
            return <AboutBackgroundHeader />
        }
        return <MainHeader />;
    };

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
