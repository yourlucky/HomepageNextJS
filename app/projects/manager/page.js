"use client";

import ProjectBox from "./ProjectBox";
import Link from "next/link";
import DarkMode from "./../../_component/DarkMode";

export default function Manger() {
    const websites = [
        {
            title: (
                <>
                    High Integrated
                    <br />
                    Power Train System (HIPIS){" "}
                </>
            ),
            role: "Product Manager",
            image: "/Smart_Factory.jpeg",
            content: (
                <>
                    <p className="font-extrabold">
                        Enhanced Quality Management Systems:
                        <br />
                    </p>
                    Developed an end-to-end system to collect and analyze equipment data throughout the powertrain
                    manufacturing process, providing actionable feedback to optimize production quality and minimize
                    costs.
                    <br />
                    <br />
                    <p className="font-extrabold">
                        Efficient Architectures with Tibero zeta DBMS:
                        <br />
                    </p>
                    Architected a new database infrastructure that slashed query load times from 600s to 5s,
                    significantly reducing reliance on legacy Oracle systems through strategic downsizing.
                    <br />
                    <br />
                    <p className="font-extrabold">
                        Global Standardization and SPC Implementation: <br />
                    </p>
                    Standardized data protocols across 20,000 machines in 10 countries and implemented Statistical
                    Process Control (SPC) to streamline global operations, resulting in a 30% reduction in manufacturing
                    defects.
                </>
            ),
        },
        {
            title: (
                <>
                    High Integrated
                    <br />
                    Vehicle System (HIVIS){" "}
                </>
            ),
            role: "Product Manager",
            image: "/Industry4_1.jpg",
            content: (
                <>
                    <p className="font-extrabold">
                        Enhanced Quality Management Systems:
                        <br />
                    </p>
                    Tailored for assembly lines involving high manual labor, this system focuses on bridging the gap
                    between human operators and digital information to ensure consistent quality.
                    <br />
                    <br />
                    <p className="font-extrabold">
                        Human-Interactive Technology Integration:
                        <br />
                    </p>
                    Integrated interactive kiosks and Smart Pens to digitize manual data entry, enabling seamless data
                    collection from floor processes and enhancing overall workflow efficiency.
                    <br />
                    <br />
                    <p className="font-extrabold">
                        Advanced Recognition Technology:
                        <br />
                    </p>
                    Improved Smart Pen recognition rates from 89% to 99.8% by training machine learning models
                    specifically on Hyundai-specific factory symbols. Additionally, deployed advanced Bluetooth control
                    technology to minimize signal interference within the industrial environment.
                </>
            ),
        },

        {
            title: (
                <>
                    Mobile Inspection
                    <br />
                    System{" "}
                </>
            ),
            role: "Lead Developer",
            image: "/mobileVideo.png",
            content: (
                <>
                    <p className="font-extrabold">
                        Minimized Downtime with Mobile System:
                        <br />
                    </p>
                    Developed a mobile video inspection system to facilitate real-time communication between factory
                    staff and external engineers, significantly reducing equipment downtime. This was the first mobile
                    solution of its kind within the facility, built with a rigorous focus on industrial security.
                    <br />
                    <br />
                    <p className="font-extrabold">
                        Foundation of Mobile Security in the Factory:
                        <br />
                    </p>
                    As a pioneer of mobile tech in the plant, I focused on robust security measures including device
                    authentication and unidirectional video processing, ensuring a secure yet user-friendly experience.
                    <br />
                    <br />
                    <p className="font-extrabold">
                        Expansion Across the Enterprise:
                        <br />
                    </p>
                    Evolved the system to integrate thermal imaging and oscilloscopes, expanding its utility to vendor
                    quality inspections, service center investigations, and monitoring new factory expansions.
                    Furthermore, I led several PoCs to integrate AR technology for enhanced remote assistance.
                </>
            ),
            addContent: (
                <>
                    <Link href="https://vccs2.hmc.co.kr/mris/" style={{color: "rgb(0, 0, 255)"}}>
                        https://vccs2.hmc.co.kr/mris
                    </Link>
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
                    <Link href="/projects/full">
                        <button className="round" role="button">
                            &lt;
                        </button>
                    </Link>
                </div>
            </div>

            {/* 가운데 콘텐츠 */}
            <div className="w-full max-w-[800px] mx-auto">
                <div className="flex items-center justify-center font-bold text-xxl pt-12 pb-10">
                    <div className="font-xxl w-5 h-5 bg-accent-blue dark:bg-accent-darkwhite mr-3"></div>Product Manager
                </div>
                <div className="font-plus text-center p-4 pb-10">
                    My career began in smart factory manufacturing, where I managed complex quality systems as a Product
                    Manager. This role was pivotal in mastering stakeholder coordination and operational strategy. By
                    extensively testing hypotheses and building end-to-end systems from the ground up, I gained
                    firsthand experience in navigating both technical successes and failures. These foundational years
                    shaped my data-driven approach and my ability to lead projects with a clear focus on business
                    impact.{" "}
                </div>

                {websites.map((projObj, index) => (
                    <div key={index} className="mb-10">
                        <ProjectBox {...projObj} />
                    </div>
                ))}
            </div>

            {/* 우측 버튼 */}
            <div className="hidden sm:flex flex-col w-1/4 pt-20 gap-4 items-center">
                <Link href="/projects/ai">
                    <button className="round" role="button">
                        &gt;
                    </button>
                </Link>
            </div>
        </div>
    );
}
