"use client";

import Link from "next/link";
import ResumeBox from "./ResumeBox";
import EducationBox from "./EducationBox";
import DarkMode from "./../_component/DarkMode";

export default function Resume() {
    const experiences = [
        {
            period: "2023 - Present",
            position: "Software Engineer",
            company: "SK Ecoplant Americas",
            location: "Irvine, CA",
            logoSrc: "/SK_logo.png",
            description: `As a Software Engineer at Sk Ecoplant, I have developed a variety of
            projects including a comprehensive Invoice Portal and a conference
            room booking system. My responsibilities ranged from designing and
            implementing the entire process for the Invoice Portal—from
            front-end to back-end and AWS deployment—to ensuring its seamless
            functionality.`,
        },
        {
            period: "2021 - 2022",
            position: "Software Developer",
            company: "UW-Madison, BuckyBots",
            location: "Madison, WI",
            logoSrc: "/Bucky.png",
            description: `In my role as a founding member of the Buckybots team, 
      I tackled everything from basic network setups to creating simulations for robot training and programming robots in C++ from scratch. This initiative, part of my master's degree, 
      led to our third-place victory at the Robocup France League 2022. Working with numerous undergraduates, I also developed my leadership skills, 
      steering our team through complex technical challenges in a collaborative environment.`,
        },
    ];
    const education = [
        {
            period: "2023 - Present",
            school: "Stony Brook University",
            major: "MS Computer Science",
            advisor: "Advisor : Prof.Josiah Hanna",
            location: "Madison, WI",
            description: `In my first year, I solidified my understanding of the fundamentals of computer science, 
        and in the second year, I focused on reinforcement learning under the guidance of Professor Josiah. 
        I am always grateful for the wonderful opportunities I have received.`,
        },
        {
            period: "2012 - 2013",
            school: "Stony Brook University",
            major: "BS Applied Mathematics & Statistics",
            advisor: " ",
            location: "StonyBrook, NY",
            description: `I was selected for a dual degree program at Ajou University in Korea, 
      which allowed me to study in the United States. 
      Applied Mathematics/Statistics, my favorite subjects, led me to graduate with the highest distinction, Summa Cum Laude.`,
        },
    ];
    const technicalSkills = [
        {
            category: "Languages",
            details: "Python, Java, C/C++, CABSL, JavaScript, R, MATLAB",
        },
        {
            category: "Frameworks/Libraries",
            details: "NodeJS, Flask, Django, PyTorch, Stable-baseline, OpenCV, Mujoco, Scikit, Pandas",
        },
        {category: "Databases", details: "MySQL, MongoDB, VectorDB"},
        {
            category: "Others",
            details:
                "Operation Research, Traditional Statistics, Reinforcement Learning, Linux, Raspberry-pi, Arduino, GitHub",
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
                            <Link href="https://drive.google.com/file/d/1mSFUG2RgQpP-snvMgJF3AdWCLe6T7-XE/view">
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
                                        {skill.category}: {skill.details}
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
