import ProjectBox from "../manager/ProjectBox";
import Link from "next/link";

export default function Fullstack() {
    const websites = [
        {
            title: "Invoice Portal",
            role: "Full-Stack Developer",
            image: "/InvoicePortal1.jpg",
            content: (
                <>
                    As a full-stack developer, I led the design and implementation of an Invoice Portal from start to
                    finish as a solo project. This system facilitates seamless external invoice submissions and manages
                    internal, role-based approval workflows. By developing and maintaining the front-end with Bootstrap
                    and JavaScript and the back-end with Django and MySQL, I ensured a smooth and efficient user
                    experience.
                    <br />
                    <br />
                    The portal features real-time payment monitoring, alerts, and budget aggregation tools, enabling
                    clear financial oversight. My work on this project resulted in $325K/year in cost savings and
                    enhanced operational efficiency by saving 0.75 hours daily for 50 users, translating to a
                    significant improvement in budget control and productivity.
                </>
            ),
            addContent: (
                <>
                    <div>Technologies Used</div>
                    <div>Back-End Development: Python Django</div>
                    <div>Front-End Development: Bootstrap, JavaScript</div>
                    <div>Database: MySQL</div>
                    <div>Cloud Services: AWS (EC2, S3)</div>
                </>
            ),
        },
        {
            title: (
                <>
                    {" "}
                    Neo2x Company
                    <br />
                    <div>Web Site</div>
                </>
            ),
            role: "Web Developer",
            image: "/neo2x.png",
            content: (
                <>
                    I built a simple website for a lawyer friend using Wix. The site features basic functionalities like
                    a blog and email, but I dedicated significant effort to enhancing the UI/UX for improved user
                    convenience. I also experimented with SEO for the first time to help boost my friend's revenue.
                    Creating something is always a joy for me.
                </>
            ),
            addContent: (
                <>
                    <Link href="https://www.neo2x.com/" style={{color: "rgb(0, 0, 255)"}}>
                        https://www.neo2x.com
                    </Link>
                </>
            ),
        },
    ];

    return (
        <div className="flex bg-beige">
            {/* 좌측 버튼 */}
            <div className="hidden sm:flex flex-col w-1/4 bg-beige pt-12 gap-4 items-center">
                <Link href="/projects/ai">
                    <button className="round" role="button">
                        &lt;
                    </button>
                </Link>
            </div>

            {/* 가운데 콘텐츠 */}
            <div className="w-full max-w-[800px] mx-auto">
                <div className="flex items-center justify-center font-bold text-xxl pt-12 pb-10">
                    <div className="font-xxl w-5 h-5 bg-[blue] mr-3"></div>Professional Projects
                </div>
                <p className="font-plus text-center p-4 pb-10">
                    At the outset of my career, much of which I spent as a Product Manager, I had the privilege of
                    navigating the realm of smart factory manufacturing quality. This role taught me invaluable lessons
                    in coordinating with diverse stakeholders and mastering effective communication and operational
                    strategies. During this period, I extensively explored hypotheses, developed systems, and gained
                    firsthand experiences of both successes and failures. These experiences have become invaluable
                    assets in my life's journey.{" "}
                </p>

                {websites.map((projObj, index) => (
                    <div key={index} className="mb-10">
                        <ProjectBox {...projObj} />
                    </div>
                ))}
            </div>

            {/* 우측 버튼 */}
            <div className="hidden sm:flex flex-col w-1/4 bg-beige pt-12 gap-4 items-center">
                <Link href="/projects/manager">
                    <button className="round" role="button">
                        &gt;
                    </button>
                </Link>
            </div>
        </div>
    );
}
