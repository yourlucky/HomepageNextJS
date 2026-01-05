"use client";

import Link from "next/link";
import ResumeBox from "./ResumeBox";
import EducationBox from "./EducationBox";
import DarkMode from "./../_component/DarkMode";

export default function Resume() {
    const experiences = [
        {
            period: "2024 - Present",
            position: "Software Engineer",
            company: "Aptamigo",
            location: "Chicago, IL",
            logoSrc: "/Aptamigo.jpg",
            description: `Architected an autonomous AI-powered SMS engagement system using TypeScript and LangGraph to enable real-time, after-hours lead follow-ups. Developed conversational AI agents that infer renter preferences and automate tour scheduling through structured JSON data integration. Successfully generated 15+ additional daily leads, significantly boosting sales agent productivity.`,
        },
        {
            period: "2023 - 2024",
            position: "Software Engineer",
            company: "SK Ecoplant Americas",
            location: "Irvine, CA",
            logoSrc: "/SK_logo.png",
            description: `Engineered a Django-based automated invoice portal, achieving $325K in annual cost savings. Managed the full development lifecycle from front-end design to AWS deployment, streamlining complex workflows for 50+ corporate users.`,
        },
        {
            period: "2015 - 2021",
            position: "Senior Software Engineer / Manager",
            company: "Hyundai Motors",
            location: "Seoul, South Korea",
            logoSrc: "/hyundai_logo.jpeg",
            description: `Orchestrated the global rollout of high-performance manufacturing IT systems across 10 countries, processing data from 20,000+ machines. Designed a distributed data platform handling 2TB/year, achieving a 98% reduction in database load time (600s to 5s). Implemented statistical process control systems that reduced defects by 30% and saved $2.5M annually.`,
        },
    ];
    const education = [
        {
            period: "2021 - 2022",
            school: "University of Wisconsin - Madison",
            major: "MS Computer Science",
            advisor: "Advisor : Prof.Josiah Hanna",
            location: "Madison, WI",
            description: `Focused on Advanced Computer Science fundamentals with a specialization in Reinforcement Learning. Conducted research under Prof. Josiah Hanna, exploring complex algorithmic challenges and autonomous system behaviors.`,
        },
        {
            period: "2012 - 2013",
            school: "Stony Brook University",
            major: "BS Applied Mathematics & Statistics",
            advisor: " ",
            location: "StonyBrook, NY",
            description: `Graduated Summa Cum Laude with a focus on Applied Mathematics and Statistics. Selected for a prestigious dual-degree program at Ajou University, South Korea, demonstrating strong analytical foundations and academic excellence.`,
        },
    ];
    const technicalSkills = [
        {
            category: "Languages",
            details: "TypeScript, Python, C++, SQL, R, MATLAB",
        },
        {
            category: "AI/Robotics",
            details: "Reinforcement Learning(SB3), LangGraph/LangChain, PyTorch, MuJoCo, OpenCV, Sim2Real",
        },
        {
            category: "Frameworks/Libraries",
            details: "Node.js, Django, MySQL, MongoDB, AWS, Distributed Systems",
        },
        {category: "Databases", details: "MySQL, MongoDB, VectorDB"},
        {
            category: "Others",
            details: "Operation Research, Traditional Statistics, Linux, Raspberry-pi, Arduino, GitHub",
        },
    ];
    return (
        <div className="w-full min-h-screen bg-accent-beige text-foreground dark:bg-accent-charcoal dark:text-foreground-dark relative">
            <div className="max-w-[800px] mx-auto">
                <div className="">
                    <div className="absolute left-0 top-0  flex items-center sm:justify-start p-3">
                        <span className="text-lg p-2 hidden sm:inline">Dark Mode </span>
                        <div className="hidden sm:flex">
                            <DarkMode />
                        </div>
                    </div>
                    <div className="flex items-center justify-center pt-12 pb-10 text-xxl font-bold ">
                        <div className="w-5 h-5 bg-accent-blue dark:bg-accent-darkwhite mr-3"></div>Resume
                    </div>
                    <div className="flex items-center justify-between px-2 p-8 xs:text-lg text-plus font-bold">
                        <div className="flex-1">Work Experience</div>
                        <div className="flex gap-3">
                            <Link href="/projects/ai">
                                <button className="button button-rs" role="button">
                                    View Projects
                                </button>
                            </Link>
                            <Link href="https://drive.google.com/file/d/1HSB-N4IFV6-FP0pYuVNi-g14m1ks62Sl/view">
                                <button className="button button-rs button-rs-pdf">PDF Download</button>
                            </Link>
                        </div>
                    </div>
                    {experiences.map((experienceObj, index) => (
                        <div key={index} className="mb-10">
                            <ResumeBox {...experienceObj} />
                        </div>
                    ))}

                    <div className="p-5"></div>

                    <div className="flex bg-white text-foreground justify-between px-10 py-5 text-plus">
                        <div>
                            <div className="text-xl font-bold py-3">Technical Skills</div>
                            {technicalSkills.map((skill, index) => (
                                <div key={index} className="flex items-center p-2">
                                    <div className="w-2 h-2 bg-accent-blue mr-3 flex-shrink-0"></div>
                                    <div className="text-base">
                                        <span className="font-semibold tracking-tight">{skill.category}</span>:{" "}
                                        <span className="font-normal">{skill.details}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between px-2 p-8 text-xl font-bold">
                        <span>Education</span>
                    </div>
                    {education.map((educationObj, index) => (
                        <div key={index} className="mb-10">
                            <EducationBox {...educationObj} />
                        </div>
                    ))}
                    <div className="p-5"></div>
                </div>
            </div>
        </div>
    );
}
