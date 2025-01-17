import React from "react";
import {useRecoilState} from "recoil";
import {counterState} from "../state/atoms";
import { MdDarkMode } from "react-icons/md";


const VisitTracker = () => {
    const [counter, setCounter] = useRecoilState(counterState);

    const handleClick = () => {
        setCounter((prevCounter) => {
            return prevCounter + 1;
        });
    };

    return (
        <button
            className="border w-40 h-10 bg-[#111111] text-[#ffffff] px-2 py-1 flex items-center justify-center"
            onClick={handleClick}
        >
            Clicked {counter} times
        </button>
    );
};

export default VisitTracker;
