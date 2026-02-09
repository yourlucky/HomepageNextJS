import React from "react";
import "./resume.css";
import Link from "next/link";
import ResumeBox from "./ResumeBox";
import EducationBox from "./EducationBox";
import {RESUME_URL} from "../resume/page";

const ResumeComponent = ({experiences = [], education = []}) => (
    <div className="w-full max-w-[800px] mx-auto">
        <div className="">
            <div className="flex items-center justify-center font-bold text-xxl pt-12 pb-10">
                <box className="w-5 h-5 bg-[blue] mr-3"></box>Resume
            </div>
            <div className="flex items-center justify-between mx-auto px-2 pb-8 text-xl font-bold">
                <div className="flex-1">Work Experience</div>
                <div className="flex gap-3">
                    <Link href="/projects/ai">
                        <button className="button-rs" role="button">
                            {" "}
                            View Projects
                        </button>
                    </Link>
                    <Link href={RESUME_URL}>
                        <button className="button-rs button-rs-pdf">PDF Download</button>
                    </Link>
                </div>
            </div>
            {experiences.map((experienceObj, index) => (
                <div key={index} className="mb-10">
                    <ResumeBox {...experienceObj} />
                </div>
            ))}

            <div className="p-5"></div>

            <div className="flex bg-white justify-between mx-auto px-10 py-5 text-plus">
                <div>
                    <div className="text-xl font-bold py-3">Technical Skills</div>
                    <div className="flex items-center p-2">
                        <box className="w-2 h-2 bg-[blue] mr-3 flex-shrink-0"></box>
                        <div className="text-base">Languages: Python, Java, C/C++, CABSL, JavaScript, R, MATLAB</div>
                    </div>
                    <div className="flex items-center p-2">
                        <box className="w-2 h-2 bg-[blue] mr-3 flex-shrink-0"></box>
                        <div className="text-base">
                            Frameworks/Libraries: NodeJS, Flask, Django, PyTorch, Stable-baseline, OpenCV, Mujoco,
                            Scikit, Pandas
                        </div>
                    </div>
                    <div className="flex items-center p-2">
                        <box className="w-2 h-2 bg-[blue] mr-3 flex-shrink-0"></box>
                        <div className="text-base">Databases: MySQL, MongoDB, VectorDB</div>
                    </div>
                    <div className="flex items-center p-2">
                        <box className="w-2 h-2 bg-[blue] mr-3 flex-shrink-0"></box>
                        <div className="text-base">
                            Others: Operation Research, Traditional Statistics, Reinforcement Learning, Linux,
                            Raspberry-pi, Arduino, GitHub
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between mx-auto pt-14 pb-5 text-xl font-bold">
                <span>Education</span>
            </div>
            {education.map((educationObj, index) => (
                <div key={index} className="mb-10">
                    <EducationBox {...educationObj} />
                </div>
            ))}
        </div>
    </div>
);

export default ResumeComponent;
