import React from "react";
import {useRecoilState} from "recoil";
import {darkState} from "../state/atoms";
import {MdDarkMode} from "react-icons/md";
import {FaRegSun} from "react-icons/fa";

const DarkMode = () => {
    const [dark, setDark] = useRecoilState(darkState);

    const handleClick = () => {
        setDark((prevDark) => !prevDark);
    };

    return (
        <div onClick={handleClick} style={{cursor: "pointer", fontSize: "30px"}}>
            {dark ? <MdDarkMode /> : <FaRegSun />}
        </div>
    );
};

export default DarkMode;
