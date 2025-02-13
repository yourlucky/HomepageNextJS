"use client";

import {useState, useEffect} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function ProjectsDropdown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const pathname = usePathname(); // 현재 경로 가져오기

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    useEffect(() => {
        setIsDropdownOpen(false);
    }, [pathname]);

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="hover:text-accent-blue dark:hover:text-accent-darkblue focus:outline-none"
            >
                PROJECTS
            </button>
            {isDropdownOpen && (
                <div className="absolute top-8 left-0 bg-white text-foreground sm:text-sm shadow-lg border rounded-md w-48 z-50">
                    <Link
                        href="/projects/ai"
                        className="block pl-2 py-2 hover:text-accent-blue dark:hover:text-accent-darkblue"
                    >
                        AI
                    </Link>
                    <Link
                        href="/projects/full"
                        className="block pl-2 py-2 hover:text-accent-blue dark:hover:text-accent-darkblue"
                    >
                        Full Stack
                    </Link>
                    <Link
                        href="/projects/manager"
                        className="block pl-2 py-2 hover:text-accent-blue dark:hover:text-accent-darkblue sm:whitespace-nowrap whitespace-normal break-words max-w-[80px]"
                    >
                        Project Manager
                    </Link>
                </div>
            )}
        </div>
    );
}
