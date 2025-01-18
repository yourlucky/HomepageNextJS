"use client";

import React from "react";
import Link from "next/link";
import {FaLinkedin, FaGithub} from "react-icons/fa";
import {RiContactsFill} from "react-icons/ri";
import Image from "next/image";
import DarkMode from "./_component/DarkMode";

export default function Home() {
    return (
        <section className="flex flex-col sm:flex-row min-h-screen relative bg-background text-foreground dark:bg-background-dark dark:text-foreground-dark ">
            {/* 좌측 베이지색 영역 (모바일에서는 숨김) */}
            <div className="hidden sm:flex w-1/3 flex-col bg-accent-beige dark:bg-accent-charcoal relative">
                <div className="flex items-center p-3">
                    <span className="text-lg p-2">Dark Mode </span> <DarkMode />
                </div>
            </div>

            {/* 컨텐츠 영역 베이지색 외 전체 */}
            <div className="flex-1 flex flex-col gap-8 p-8 sm:p-20 relative">
                {/* 프로필 카드 */}
                <div
                    className="bg-accent-brightbeige dark:bg-accent-lightgray flex flex-col items-center mx-auto sm:absolute sm:left-[0%] sm:top-[11%] sm:translate-x-[-90%]"
                    style={{width: "min(300px, 40%)", minWidth: "300px"}}
                >
                    <div className="h-[90%] flex flex-col items-center">
                        <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mt-8 relative">
                            <Image
                                src="/my_pic.jpg"
                                alt="my picture"
                                className="object-cover"
                                fill
                                sizes="(max-width: 640px) 100vw, 300px"
                            />
                        </div>
                        <div className="text-xxl font-bold pt-5 pb-3">Yoon Na</div>
                        <div className="w-12 h-0.5 bg-accent-blue dark:bg-white"></div>
                        <div className="text-plus font-light py-8">FULL-STACK ENGINEER</div>
                    </div>
                    {/* 프로필 하단 아이콘 섹션 */}
                    <div className="h-[10%] bg-white dark:bg-black w-full flex justify-center items-center gap-4 py-4">
                        <a
                            href="https://www.linkedin.com/in/ycna/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent-blue"
                        >
                            <FaLinkedin size={20} color="currentColor" />
                        </a>
                        <a
                            href="https://github.com/yourlucky"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent-blue"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a href="/contact" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue">
                            <RiContactsFill size={20} />
                        </a>
                    </div>
                </div>

                {/* 우측 컨텐츠 */}
                <div className="flex flex-col gap-8">
                    {/* Hey There! + 버튼 */}
                    <div className="flex flex-col items-start">
                        <div className="text-extra font-bold">
                            Hey <br /> There!
                        </div>
                        <div className="flex gap-10 mt-4">
                            <Link href="/resume">
                                <button className="button button-res" role="button">
                                    RESUME
                                </button>
                            </Link>
                            <Link href="/projects/ai">
                                <button className="button button-prj">PROJECTS</button>
                            </Link>
                        </div>
                    </div>

                    {/* 나머지 글씨 */}
                    <div className="flex flex-col gap-4">
                        <div className="text-xl font-bold">From Ideas to Implementation</div>
                        <div className="text-lg">: My Engineering Journey</div>
                        <p>
                            I’m a full-stack engineer based in California. My journey in technology began at Hyundai,
                            where I spent three years as an IT manager and another three as an engineer, mastering the
                            management of complex projects and the intricacies of software development. After earning a
                            master's degree, I competed in a Robocup competition, securing third place and further
                            honing my problem-solving skills. Today, I work as a software engineer in Irvine.
                        </p>
                        <p>
                            I excel in turning insights into effective software solutions, whether developing robust
                            systems or innovating new ones. Explore my portfolio to discover projects like the Invoice
                            Portal, Robot Soccer, the neo2x website, an IoT panel, and a private chatbot web. Recently,
                            I have been focusing on leveraging LLMs to drive business innovation. Each project
                            highlights my dual expertise in technical innovation and strategic project management. Let’s
                            collaborate to create something impactful!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
