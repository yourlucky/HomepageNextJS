import React from "react";
import Image from "next/image";

const ResumeBox = ({period, position, company, location, logoSrc, description}) => (
    <div className="flex bg-white justify-between mx-auto px-5 py-2.5 text-plus text-foreground">
        <span className="flex-col px-7 py-5 justify-between">
            <div>
                <div className="text-lg font-bold pb-3" style={{color: "rgb(0, 0, 255)"}}>
                    {period}
                </div>
                <div className="pb-3">{position}</div>
                <div className="text-sm	pb-1">{company}</div>
                <div className="text-sm pb-5">{location}</div>
            </div>
            <div>
                <Image
                    src={logoSrc}
                    alt="company logo"
                    width={100}
                    height={100}
                    style={{width: "auto", height: "auto"}}
                />
            </div>
        </span>
        <span className="text-sm sm:text-lg px-7 pt-12 pb-5 max-w-[60%]">{description}</span>
    </div>
);

export default ResumeBox;
