"use client";

import ProjectBox from "./ProjectBox";
import ProjectUBox from "./ProjectUBox";
import DarkMode from "./../../_component/DarkMode";
import Link from "next/link";

export default function AiProject() {
    const chatbot = [
        {
            title: "Erin: Autonomous AI Agent",
            role: "Software Engineer @ AptAmigo",
            image: "/Erin.png",
            content: `Developed 'Erin,' an autonomous AI engagement system designed to handle real-time lead follow-ups. 
            By architecting a scenario-driven agent workflow, Erin infers renter preferences such as budget, neighborhoods, and move-in dates from SMS interactions. 
            The system automates complex tasks including personalized tour list generation and scheduling, ensuring seamless engagement outside business hours. 
            This implementation successfully generated 15+ additional leads per day, significantly contributing to sales conversion and agent retention.`,
            addContent: (
                <>
                    <div>Development: LangGraph, TypeScript, Node.js</div>
                    <div>AI Models: Claude 3.5 Sonnet, GPT-4o </div>
                    <div>Infrastructure :AWS Lambda (Serverless), MongoDB </div>
                </>
            ),
        },
    ];

    const soccerbot = [
        {
            title: "Robot Soccer",
            role: "Software Engineer",
            youtubeLink: [
                "https://www.youtube.com/embed/0Rd1JdVSBTo?rel=0&vq=hd720",
                "https://www.youtube.com/embed/w6erVAAG09w?rel=0&vq=hd720",
            ],
            content: (
                <>
                    As a founding member of the BuckyBots team, I led the software development for the Nao robot
                    platform from the ground up. To overcome the data scarcity and time constraints of physical robot
                    training, I engineered a high-speed simulation environment using PyGame. This Digital Twin approach
                    enabled data acquisition at 500 samples per second—roughly 2,500 times faster than physical
                    hardware—accelerating the development of robust reinforcementSim2Realreinforcement learning models.
                    <br />
                    <br />
                    My technical contributions spanned the entire robotics stack: utilizing OpenCV for real-time
                    perception of balls and field markers, implementing table-Baselines3 for behavioral planning, and
                    optimizing robot gait and control in C++based on the B-Human framework. These efforts culminated in
                    securing 3rd place in the Standard Platform League at RoboCup 2023 in France.
                </>
            ),
            addContent: (
                <>
                    <div>Technologies Used</div>
                    <div>Perception : ball/field recognition (OpenCV)</div>
                    <div>Planning : optimize path (Sim2Real, stablebaseline)</div>
                    <div>Control : robot movements (C++, B-human)</div>
                    <div className="font-bold py-3">Secured 3rd place at RoboCup 2023 in France </div>

                    <Link
                        href="https://spl.robocup.org/wp-content/uploads/SPL2023_TDP_BadgerBots.pdf"
                        style={{color: "rgb(0, 0, 255)"}}
                    >
                        Description Paper
                    </Link>
                </>
            ),
        },
        {
            title: (
                <>
                    IoT Control system
                    <br /> <div className="font-sm px-2">: from sensor to the web</div>
                </>
            ),
            role: "Hobby",
            youtubeLink: ["https://www.youtube.com/embed/_6qmTGQIzXA"],
            content: (
                <>
                    Explored the integration of hardware and cloud software through a custom IoT monitoring system. I
                    performed precision soldering and hardware integration for the BME280 sensor via I²C communication
                    on a Raspberry Pi. The system features a Python Flask backend that processes environmental data in
                    the cloud, providing a real-time web dashboard for monitoring room temperature and humidity
                    alongside personal schedule management. This project demonstrates my ability to bridge the gap
                    between physical sensors and web-based data visualization.
                </>
            ),
            addContent: (
                <>
                    <div>Technologies Used</div>
                    <div>Hardware : Raspberry-Pi, BME280(I²C)</div>
                    <div>Framework : Python Flask</div>
                </>
            ),
        },
    ];

    return (
        <div className="flex bg-accent-beige text-foreground dark:bg-accent-charcoal dark:text-foreground-dark">
            {/* 좌측 버튼 */}
            <div className="hidden sm:flex flex-col w-1/4 items-center relative">
                <div className="flex items-center p-2 absolute left-0 top-0">
                    <span className="text-lg pr-2">Dark Mode </span> <DarkMode />
                </div>
                <div className="hidden sm:flex flex-col w-1/4 items-center pt-20 gap-4">
                    <Link href="/projects/manager">
                        <button className="round" role="button">
                            &lt;
                        </button>
                    </Link>
                </div>
            </div>

            {/* 가운데 콘텐츠 */}
            <div className="w-full max-w-[800px] mx-auto">
                <div className="flex items-center justify-center font-bold text-xxl pt-12 pb-10">
                    <div className="font-xxl w-5 h-5 bg-accent-blue dark:bg-accent-darkwhite mr-3"></div>Implementing
                    with AI
                </div>
                <div className="font-plus text-center p-4 pb-10">
                    Driven by a deep passion for exploring and implementing emerging technologies, my journey into AI
                    began with the complex challenges of autonomous robot soccer. This foundation naturally evolved into
                    a broader expertise in IoT sensor integration and advanced machine learning architectures.
                    Currently, I am specializing in building sophisticated Agentic workflows using LLMs and LangGraph,
                    transforming cutting-edge research into functional, business-oriented solutions. I remain dedicated
                    to leveraging the rapid advancements in AI to solve intricate problems and deliver innovative
                    digital experiences.{" "}
                </div>

                {chatbot.map((projObj, index) => (
                    <div key={index} className="mb-10">
                        <ProjectBox {...projObj} />
                    </div>
                ))}

                {soccerbot.map((projObj, index) => (
                    <div key={index} className="mb-10">
                        <ProjectUBox {...projObj} />
                    </div>
                ))}
            </div>

            {/* 우측 버튼 */}
            <div className="hidden sm:flex flex-col w-1/4 pt-20 gap-4 items-center">
                <Link href="/projects/full">
                    <button className="round" role="button">
                        &gt;
                    </button>
                </Link>
            </div>
        </div>
    );
}
