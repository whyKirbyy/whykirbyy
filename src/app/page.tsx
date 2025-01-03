"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import BackToTopButton from "@/app/components/backToTopButton";
import SearchPopup from "@/app/components/searchPopup";

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);
  const [showTerminal, setShowTerminal] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const notShowSearch = () => {
    setShowSearch((prev) => !prev);
  };

  useEffect(() => {
    if (showSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSearch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        terminalRef.current &&
        !terminalRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowSearch(false);
      }
    };

    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "h") {
        setShowSearch((prev) => !prev);
      }

      if ((event.metaKey || event.ctrlKey) && event.key === "H") {
        setShowSearch((prev) => !prev);
      }

      if (event.key === "Escape" && showSearch) {
        setShowSearch(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showSearch]);

  const expandTerminal = () => {
    setIsExpanded(!isExpanded);
  };

  const hideTerminal = () => {
    setShowTerminal(!showTerminal);
  };

  return (
    <div>
      <div className={styles.page}>
        {/*##################################################-> Section about<-#############################################*/}
        <section id={"about"} className={styles.about}>
          <div className={styles.dictSection}>
            <span className={[styles.darkerFont, styles.decorators].join(" ")}>
              about_content: Dict[str, Union[str, List[str], Dict[str, str]]] ={" "}
              {"{"}
              <br />
            </span>
            <div className={styles.textSection}>
              <span
                className={[styles.darkerFont, styles.decorators].join(" ")}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;"tim_schmid": """
              </span>
              <div>
                <div className={styles.textBlock}>
                  <span className={styles.text}>
                    Hi, I{"'"}m Tim. I’m a Computer Science and Astrophysics
                    student at the University of Zurich. I love everything
                    computer and programming because it’s the perfect blend of
                    math, creativity, and building things. When I{"'"}m not
                    programming, you’ll probably find me doing/reading
                    math/physics stuff or reading books in generall and
                    sometimes I am also running :P
                    <span className={[styles.darkerFont].join(" ")}>
                      """, <br />
                      <br />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dictSection}>
            <div className={styles.textSection}>
              <span
                className={[styles.darkerFont, styles.decorators].join(" ")}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;"tech_stack":&nbsp;
              </span>
              <div>
                <div className={styles.textBlock}>
                  <span className={[styles.darkerFont].join(" ")}>[</span>
                  <span className={styles.text}>
                    <span className={styles.darkerFont}>"</span>
                    Python
                    <span className={styles.darkerFont}>",&nbsp;</span>
                    <span className={styles.darkerFont}>"</span>
                    TypeScript
                    <span className={styles.darkerFont}>",&nbsp;</span>
                    <span className={styles.darkerFont}>"</span>
                    Java
                    <span className={styles.darkerFont}>",&nbsp;</span>
                    <span className={styles.darkerFont}>"</span>C
                    <span className={styles.darkerFont}>",&nbsp;</span>
                    <span className={styles.darkerFont}>"</span>
                    <Link
                      className={styles.linkInternal}
                      href="/about-languages/"
                    >
                      <span>details</span>
                    </Link>
                    <span className={styles.darkerFont}>"</span>
                  </span>
                  <span className={[styles.darkerFont].join(" ")}>],</span>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dictSection}>
            <div className={styles.textSection}>
              <span
                className={[styles.darkerFont, styles.decorators].join(" ")}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;"links":&nbsp;
              </span>
              <div>
                <div className={styles.textBlock}>
                  <span className={[styles.darkerFont].join(" ")}>{"{"}</span>
                  <span className={styles.text}>
                    <span className={styles.darkerFont}>
                      "github_link":&nbsp;
                    </span>
                    <span className={styles.darkerFont}>"</span>
                    <a
                      href={"https://github.com/whyKirbyy"}
                      className={styles.linkExternal}
                    >
                      github
                    </a>
                    <span className={styles.darkerFont}>",&nbsp;</span>
                  </span>
                  <span className={styles.text}>
                    <span className={styles.darkerFont}>
                      "resume_download":&nbsp;
                    </span>
                    <span className={styles.darkerFont}>"</span>
                    <a
                      href={"/resume.pdf"}
                      download={"resume_Tim_Schmid.pdf"}
                      className={styles.linkExternal}
                    >
                      resume
                    </a>
                    <span className={styles.darkerFont}>",&nbsp;</span>
                  </span>
                  <span className={[styles.darkerFont].join(" ")}>{"}"},</span>
                </div>
              </div>
            </div>
          </div>
          <span className={[styles.darkerFont, styles.decorators].join(" ")}>
            {"}"}
          </span>
        </section>
        <div>
          <br />
        </div>
        {/*##################################################-> Section Projects<-#############################################*/}
        <section id={"projects"} className={styles.projects}>
          <span className={[styles.darkerFont, styles.decorators].join(" ")}>
            @dataclass
            <br />
          </span>
          <span className={[styles.darkerFont, styles.decorators].join(" ")}>
            class Project:
            <br />
          </span>
          <span className={`${styles.darkerFont} ${styles.decorators}`}>
            {Array(8).fill("\u00A0").join("")}self.name: str = name
            <br />
          </span>
          <span className={`${styles.darkerFont} ${styles.decorators}`}>
            {Array(8).fill("\u00A0").join("")}self.details: str = details
            <br />
          </span>
          <span className={`${styles.darkerFont} ${styles.decorators}`}>
            {Array(8).fill("\u00A0").join("")}self.tech_stack: List[str] =
            tech_stack
            <br />
          </span>
          <span className={`${styles.darkerFont} ${styles.decorators}`}>
            {Array(8).fill("\u00A0").join("")}self.links: List[str] = links
            <br />
          </span>
          <span className={`${styles.darkerFont} ${styles.decorators}`}>
            {Array(8).fill("\u00A0").join("")}self.status: str = status
            <br />
            <br />
          </span>
          <span className={[styles.darkerFont, styles.decorators].join(" ")}>
            projects_content: List[Project] = [<br />
          </span>
          {/*-------------------New Project-------------------*/}
          <span className={`${styles.darkerFont} ${styles.decorators}`}>
            {Array(4).fill("\u00A0").join("")}Project(
            <br />
          </span>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}name="
            </div>
            <div className={styles.text}>
              <Link
                className={styles.linkInternal}
                href="/about-project?project=website"
              >
                whyKirbyy website
              </Link>
            </div>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              ",
              <br />
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}details="""
            </div>
            <div className={styles.text}>
              This website uses TypeScript with React and Next.js. The DOM
              layout is initially generated by a Python script, which takes a
              text file in a Python-based structure and converts it into a DOM
              layout (e.g., {"<"}div{">"} elements). Then I made some manual
              tweaks to fix some small things and add styling.
              <span className={[styles.darkerFont].join(" ")}>
                """, <br />
              </span>
            </div>
          </div>
          <br />
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}tech_stack=["
            </div>
            <div className={styles.text}>
              TypeScript
              <span className={styles.darkerFont}>", "</span>
              CSS
              <span className={styles.darkerFont}>", "</span>
              nextJS
              <span className={styles.darkerFont}>", "</span>
              React
              <span className={styles.darkerFont}>"],</span>
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}links=["
            </div>
            <div className={styles.text}>
              <a
                className={styles.linkExternal}
                href="https://www.whyirbyy.ch"
                target="_blank"
                rel="noopener noreferrer"
              >
                whyKirbyy.ch
              </a>
              <span className={[styles.darkerFont].join(" ")}>
                "], <br />
              </span>
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}status="
            </div>
            <div className={styles.text}>
              completed
              <span className={[styles.darkerFont].join(" ")}>
                ", <br />
              </span>
            </div>
          </div>
          <span className={`${styles.darkerFont} ${styles.decorators}`}>
            {Array(4).fill("\u00A0").join("")}),
            <br />
            <br />
          </span>
          {/*-------------------New Project-------------------*/}
          <span className={`${styles.darkerFont} ${styles.decorators}`}>
            {Array(4).fill("\u00A0").join("")}Project(
            <br />
          </span>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}name="
            </div>
            <div className={styles.text}>
              <Link
                className={styles.linkInternal}
                href="/about-project?project=nudelsoup"
              >
                nudelsoup
              </Link>
            </div>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              ",
              <br />
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}details="""
            </div>
            <div className={styles.text}>
              The idea behind nudelsoup is to create a platform for small
              businesses to track the performance of their social media content
              and automatically generate new, optimized posts. The platform will
              automaticall tailors content to the company's industry, size,
              audience, and region, leaving only a final polish for the user.
              This streamlines the content creation process while providing
              performance insights. Which then in the best case is Advertising
              at the price of ramen :D
              <span className={[styles.darkerFont].join(" ")}>
                """, <br />
              </span>
            </div>
          </div>
          <br />
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}tech_stack=["
            </div>
            <div className={styles.text}>
              Python
              <span className={styles.darkerFont}>", "</span>
              FastAPI
              <span className={styles.darkerFont}>", "</span>
              TypeScript
              <span className={styles.darkerFont}>", "</span>
              React
              <span className={styles.darkerFont}>", "</span>
              nextJS
              <span className={styles.darkerFont}>", "</span>
              MongoDB
              <span className={styles.darkerFont}>"]</span>
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}links=["
            </div>
            <div className={styles.text}>
              <a
                className={styles.linkExternal}
                href="https://www.nudelsoup.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                nudelsoup.com
              </a>
              <span className={[styles.darkerFont].join(" ")}>", "</span>
              <a
                className={styles.linkExternal}
                href="https://github.com/whyKirbyyLLC/nudelsoup-Frontend"
                target="_blank"
                rel="noopener noreferrer"
              >
                github frontend
              </a>
              <span className={[styles.darkerFont].join(" ")}>", "</span>
              <a
                className={styles.linkExternal}
                href="https://github.com/whyKirbyyLLC/nudelsoup-Backend"
                target="_blank"
                rel="noopener noreferrer"
              >
                github backend
              </a>
              <span className={[styles.darkerFont].join(" ")}>
                "] , <br />
              </span>
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}status="
            </div>
            <div className={styles.text}>
              work in progress
              <span className={[styles.darkerFont].join(" ")}>
                ", <br />
              </span>
            </div>
          </div>
          <span className={`${styles.darkerFont} ${styles.decorators}`}>
            {Array(4).fill("\u00A0").join("")}),
            <br />
            <br />
          </span>
          {/*-------------------New Project-------------------*/}
          <span className={`${styles.darkerFont} ${styles.decorators}`}>
            {Array(4).fill("\u00A0").join("")}Project(
            <br />
          </span>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}name="
            </div>
            <div className={styles.text}>
              <Link
                className={styles.linkInternal}
                href="/about-project?project=sundtrack"
              >
                sundtrack
              </Link>
            </div>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              ",
              <br />
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}details="""
            </div>
            <div className={styles.text}>
              sundtrack is a out optimising your health. As a marathon trainee,
              I wanted to optimize my nutrition without the expense of regular
              blood tests. To achieve this, I can track my calorie and food
              intake which then leads to estimatde macros based on which
              sundtrack calculates potential supplements. The goal is to create
              a system that suggests optimal supplements to boost energy and
              performance, while checking for side effects and interactions. It
              even tries identifies the best options available near you.
              <span className={[styles.darkerFont].join(" ")}>
                """, <br />
                <br />
              </span>
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}tech_stack=["
            </div>
            <div className={styles.text}>
              Python
              <span className={styles.darkerFont}>", "</span>
              FastAPI
              <span className={styles.darkerFont}>", "</span>
              TypeScript
              <span className={styles.darkerFont}>", "</span>
              React
              <span className={styles.darkerFont}>", "</span>
              nextJS
              <span className={styles.darkerFont}>", "</span>
              MongoDB
              <span className={styles.darkerFont}>"]</span>
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}links=["
            </div>
            <div className={styles.text}>
              <a
                className={styles.linkExternal}
                href="https://github.com/whyKirbyyLLC/sundtrack-Frontend"
                target="_blank"
                rel="noopener noreferrer"
              >
                github frontend
              </a>
              <span className={[styles.darkerFont].join(" ")}>", "</span>
              <a
                className={styles.linkExternal}
                href="https://github.com/whyKirbyyLLC/sundtrack-Backend"
                target="_blank"
                rel="noopener noreferrer"
              >
                github backend
              </a>
              <span className={[styles.darkerFont].join(" ")}>
                "] , <br />
              </span>
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}status="
            </div>
            <div className={styles.text}>
              work in progress
              <span className={[styles.darkerFont].join(" ")}>
                ", <br />
              </span>
            </div>
          </div>
          <span className={`${styles.darkerFont} ${styles.decorators}`}>
            {Array(4).fill("\u00A0").join("")}),
            <br />
            <br />
          </span>
          {/*-------------------New Project-------------------*/}
          <span className={`${styles.darkerFont} ${styles.decorators}`}>
            {Array(4).fill("\u00A0").join("")}Project(
            <br />
          </span>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}name="
            </div>
            <div className={styles.text}>
              <Link
                className={styles.linkInternal}
                href="/about-project?project=mapmystery"
              >
                mapmystery
              </Link>
            </div>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              ",
              <br />
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}details="""
            </div>
            <div className={styles.text}>
              This was a group project from the Software Engineering Lab, where
              I designed and implemented the main part of the Frontend. We
              created a geoguesser clone, with and additional gamemode which we
              called FlagFinder.
              <span className={[styles.darkerFont].join(" ")}>
                """, <br />
                <br />
              </span>
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}tech_stack=["
            </div>
            <div className={styles.text}>
              TypeScript
              <span className={styles.darkerFont}>", "</span>
              React
              <span className={styles.darkerFont}>", "</span>
              SCSS
              <span className={styles.darkerFont}>", "</span>
              Tailwind
              <span className={styles.darkerFont}>", "</span>
              Websockets
              <span className={styles.darkerFont}>", "</span>
              Google Maps API
              <span className={styles.darkerFont}>"]</span>
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}links=["
            </div>
            <div className={styles.text}>
              <a
                className={styles.linkExternal}
                href="https://github.com/whyKirbyy/MapMystery-Client"
                target="_blank"
                rel="noopener noreferrer"
              >
                github frontend
              </a>
              <span className={[styles.darkerFont].join(" ")}>"</span>
              <span className={[styles.darkerFont].join(" ")}>
                ],
                <br />
              </span>
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}status="
            </div>
            <div className={styles.text}>
              work in progress
              <span className={[styles.darkerFont].join(" ")}>
                ", <br />
              </span>
            </div>
          </div>
          <span className={`${styles.darkerFont} ${styles.decorators}`}>
            {Array(4).fill("\u00A0").join("")}),
            <br />
            <br />
          </span>
          {/*-------------------New Project-------------------*/}
          <span className={`${styles.darkerFont} ${styles.decorators}`}>
            {Array(4).fill("\u00A0").join("")}Project(
            <br />
          </span>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}name="
            </div>
            <div className={styles.text}>
              <Link
                className={styles.linkInternal}
                href="/about-project?project=lgl"
              >
                Little German Language
              </Link>
            </div>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              ",
              <br />
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}details="""
            </div>
            <div className={styles.text}>
              A cool little university Project were I created my own little
              languge, with its own compiler and more
              <span className={[styles.darkerFont].join(" ")}>
                """, <br />
              </span>
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}tech_stack=["
            </div>
            <div className={styles.text}>
              Python
              <span className={styles.darkerFont}>", "</span>
              Assembly
              <span className={styles.darkerFont}>"]</span>
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}links=["
            </div>
            <div className={styles.text}>
              <a
                className={styles.linkExternal}
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
              <span className={[styles.darkerFont].join(" ")}>
                "], <br />
              </span>
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}status="
            </div>
            <div className={styles.text}>
              completed
              <span className={[styles.darkerFont].join(" ")}>
                ", <br />
              </span>
            </div>
          </div>
          <span className={`${styles.darkerFont} ${styles.decorators}`}>
            {Array(4).fill("\u00A0").join("")}),
            <br />
          </span>
          {/*-------------------New Project-------------------*/}
          <span className={`${styles.darkerFont} ${styles.decorators}`}>
            {Array(4).fill("\u00A0").join("")}Project(
            <br />
          </span>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}name="
            </div>
            <div className={styles.text}>
              <Link
                className={styles.linkInternal}
                href="/about-project?project=package"
              >
                whyKirbyy package
              </Link>
            </div>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              ",
              <br />
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}details="""
            </div>
            <div className={styles.text}>
              This should / will be a PyPi package which can take the code
              displayed on this website and return resume.pdf
              <span className={[styles.darkerFont].join(" ")}>
                """, <br />
                <br />
              </span>
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}tech_stack=["
            </div>
            <div className={styles.text}>
              Python
              <span className={styles.darkerFont}>],</span>
            </div>
          </div>
          <br />
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}links=["
            </div>
            <div className={styles.text}>
              <a
                className={styles.linkExternal}
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
              <span className={[styles.darkerFont].join(" ")}>
                "], <br />
              </span>
            </div>
          </div>
          <br />
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(8).fill("\u00A0").join("")}status="
            </div>
            <div className={styles.text}>
              not even started...
              <span className={[styles.darkerFont].join(" ")}>
                ", <br />
              </span>
            </div>
          </div>
          <span className={`${styles.darkerFont} ${styles.decorators}`}>
            {Array(4).fill("\u00A0").join("")}),
            <br />
            <br />
          </span>
          <span className={`${styles.darkerFont} ${styles.decorators}`}>]</span>
        </section>
        <div>
          <br />
          <br />
        </div>
        {/*##################################################-> Section Background <-#############################################*/}
        <section id={"background"} className={styles.background}>
          <span className={styles.darkerFont}>
            background_graph: nx.DiGraph = nx.DiGraph()
          </span>
          {/* ----------------------------- new background ---------------------- */}
          <span className={styles.darkerFont}>background_graph.add_node(</span>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(4).fill("\u00A0").join("")}"
            </div>
            <div className={styles.text}>
              <Link
                href={"/about-background?background=ssd"}
                className={styles.linkInternal}
              >
                Software Engineering Internship
              </Link>
              <span className={[styles.darkerFont].join(" ")}>
                ", <br />
              </span>
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(4).fill("\u00A0").join("")}role="
            </div>
            <div className={styles.text}>
              Software Engineering Intern
              <span className={[styles.darkerFont].join(" ")}>
                ", <br />
              </span>
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(4).fill("\u00A0").join("")}organisation="
            </div>
            <div className={styles.text}>
              ssd.ngo
              <span className={[styles.darkerFont].join(" ")}>
                ", <br />
              </span>
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(4).fill("\u00A0").join("")}time_period={"{"}
            </div>
            <span className={[styles.darkerFont].join(" ")}>
              "start_date":&nbsp;"
            </span>
            <div className={styles.text}>01.01.2024</div>
            <span className={[styles.darkerFont].join(" ")}>
              ", "end_date":&nbsp;"
            </span>
            <div className={styles.text}>01.03.2024</div>
            <span className={[styles.darkerFont].join(" ")}>
              "{"}"}, <br />
            </span>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(4).fill("\u00A0").join("")}description="""
            </div>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat,sed diam voluptua.
              <span className={[styles.darkerFont].join(" ")}>
                """, <br />
              </span>
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(4).fill("\u00A0").join("")}tech_stack=["
            </div>
            <div className={styles.text}>Python</div>
            <span className={styles.darkerFont}>
              ", " <br />
            </span>
            <div className={styles.text}>Python</div>
            <span className={styles.darkerFont}>
              ", " <br />
            </span>
            <div className={styles.text}>Python</div>
            <span className={styles.darkerFont}>
              ", " <br />
            </span>
            <div className={styles.text}>Python</div>
            <span className={[styles.darkerFont].join(" ")}>
              "], <br />
            </span>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(4).fill("\u00A0").join("")}reference="
            </div>
            <div className={styles.text}>
              <a className={styles.linkExternal}>reference</a>
            </div>
            <div className={styles.darkerFont}>",</div>
          </div>
          <span className={styles.darkerFont}>
            )<br />
            <br />
          </span>
          {/* ----------------------------- new background ---------------------- */}
          <span className={styles.darkerFont}>background_graph.add_node(</span>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(4).fill("\u00A0").join("")}"
            </div>
            <div className={styles.text}>
              <Link
                href={"/about-background?background=studies"}
                className={styles.linkInternal}
              >
                Studies
              </Link>
              <span className={[styles.darkerFont].join(" ")}>
                ", <br />
              </span>
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(4).fill("\u00A0").join("")}university="
            </div>
            <div className={styles.text}>
              University of Zurich
              <span className={[styles.darkerFont].join(" ")}>
                ", <br />
              </span>
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(4).fill("\u00A0").join("")}major="
            </div>
            <div className={styles.text}>
              Computer Science
              <span className={[styles.darkerFont].join(" ")}>
                ", <br />
              </span>
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(4).fill("\u00A0").join("")}minor="
            </div>
            <div className={styles.text}>
              Astrophysics
              <span className={[styles.darkerFont].join(" ")}>
                ", <br />
              </span>
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(4).fill("\u00A0").join("")}time_period={"{"}
            </div>
            <span className={[styles.darkerFont].join(" ")}>
              "start_date":&nbsp;"
            </span>
            <div className={styles.text}>01.01.2022</div>
            <span className={[styles.darkerFont].join(" ")}>
              ", "end_date":&nbsp;"
            </span>
            <div className={styles.text}>01.03.2024</div>
            <span className={[styles.darkerFont].join(" ")}>
              "{"}"}, <br />
            </span>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(4).fill("\u00A0").join("")}description="""
            </div>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat,sed diam voluptua.
              <span className={[styles.darkerFont].join(" ")}>
                """, <br />
              </span>
            </div>
          </div>
          <div className={styles.line}>
            <div className={`${styles.darkerFont} ${styles.decorators}`}>
              {Array(4).fill("\u00A0").join("")}grades{"{"}"
            </div>
            <span className={[styles.darkerFont].join(" ")}>
              overall":&nbsp;
              <br />
            </span>
            <div className={styles.text}>5</div>
            <span className={[styles.darkerFont].join(" ")}>
              , "subject":&nbsp;
              <br />
            </span>
            <div className={styles.text}>5</div>
            <span className={[styles.darkerFont].join(" ")}>
              , "subject":&nbsp;
              <br />
            </span>
            <div className={styles.text}>5</div>
            <span className={[styles.darkerFont].join(" ")}>
              {"}"},<br />
            </span>
          </div>
          <div className={styles.line}>
            <span className={styles.darkerFont}>
              {Array(4).fill("\u00A0").join("")}transcript_of_records="
            </span>
            <span className={styles.text}>
              <a
                href={"/transcript_of_records.pdf"}
                download={"records_Tim_Schmid.pdf"}
                className={styles.linkExternal}
              >
                transcript of records
              </a>
            </span>
            <span className={styles.darkerFont}>",</span>
          </div>
          <span className={styles.darkerFont}>)</span>
          {/* ----------------------------- backgrounds done ---------------------- */}
          <div>
            <br />
          </div>
          <div className={styles.darkerFont}>
            background_graph.add_edge("Studies", "Software Engineering Intern",
            relationship="mandatory internship")
          </div>
        </section>
        <div>
          <br />
          <br />
        </div>
        {/*##################################################-> Section Experience <-#############################################*/}
        <section id={"info"} className={styles.info}>
          <div className={styles.line}>
            <span className={styles.darkerFont}>info_content: str = """</span>
            <span className={styles.text}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat,sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua.
              <span className={[styles.darkerFont].join(" ")}>
                """
                <br />
              </span>
            </span>
          </div>
        </section>
        <div>
          <br />
          <br />
        </div>
        <section id={"contact"} className={styles.contact}>
          <div className={styles.line}>
            <div className={styles.darkerFont}>
              # to get in contact write me an
            </div>
            <div>
              &nbsp;email:{" "}
              <a
                className={styles.linkExternal}
                href="mailto:whykirbyy@whykirbyy.ch"
              >
                whykirbyy@whykirbyy.ch
              </a>{" "}
              :D
            </div>
          </div>
        </section>
        <div>
          <br />
          <br />
        </div>
        {/*##################################################-> Section Experience <-#############################################*/}
        <section className={styles.info}>
          <div className={[styles.line, styles.darkerFont].join(" ")}>
            if __name__ == "__main__":
          </div>
          <div className={[styles.line, styles.darkerFont].join(" ")}>
            {Array(4).fill("\u00A0").join("")}
            whykirbyy_instance.set_about(about_content)
          </div>
          <div className={[styles.line, styles.darkerFont].join(" ")}>
            {Array(4).fill("\u00A0").join("")}
            whykirbyy_instance.set_projects(projects_content)
          </div>
          <div className={[styles.line, styles.darkerFont].join(" ")}>
            {Array(4).fill("\u00A0").join("")}
            whykirbyy_instance.set_background(background_graph)
          </div>
          <div className={[styles.line, styles.darkerFont].join(" ")}>
            {Array(4).fill("\u00A0").join("")}
            whykirbyy_instance.set_info(info_content)
          </div>
          <div className={[styles.line, styles.darkerFont].join(" ")}>
            {Array(4).fill("\u00A0").join("")}
            <br />
          </div>
          <div className={[styles.line, styles.darkerFont].join(" ")}>
            {Array(4).fill("\u00A0").join("")}resume =
            whykirbyy_instance.resume()
          </div>
          <div className={[styles.line, styles.darkerFont].join(" ")}>
            {Array(4).fill("\u00A0").join("")}
            <br />
          </div>
        </section>
        {showSearch && (
          <div ref={terminalRef}>
            <SearchPopup showTerminal={notShowSearch} />
          </div>
        )}
        <div ref={buttonRef}>
          {/*<BackToTopButton
            setShowSearch={notShowSearch}
            setShowTerminal={hideTerminal}
            isTerminalToggled={isExpanded}
            isTerminalHidden={!showTerminal}
          />*/}
        </div>
      </div>
    </div>
  );
}
