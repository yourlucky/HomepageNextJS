import React from "react";

const ProjectUBox = ({title, role, content, addContent, youtubeLink}) => (
    <div className="bg-white text-foreground">
        {/*파랑상자+제목+Role*/}
        <div className="flex justify-start py-5 text-lg">
            <div className="inline-block w-2 h-12 bg-accent-blue"></div>
            <div>
                <div className="text-lg font-bold px-5" style={{color: "rgb(0, 0, 255)"}}>
                    {title}
                </div>
                <div className="text-base px-5 py-1">Role: {role}</div>
            </div>
        </div>

        {/*Content+Pic*/}
        <div className="flex flex-col sm:flex-row justify-between p-5">
            <div className="basis-full sm:basis-3/5 px-2">
                <div>{content}</div>
            </div>
            <div className="flex flex-col gap-5 basis-2/5">
                {youtubeLink.map((link, index) => (
                    <iframe
                        key={index}
                        width="320"
                        height="181"
                        src={link}
                        title={`YouTube Video ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                ))}
            </div>
        </div>

        {/* Add Info*/}
        <div className="p-5">{addContent}</div>
    </div>
);

export default ProjectUBox;
