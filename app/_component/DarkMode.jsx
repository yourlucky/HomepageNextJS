import React from "react";
import {useRecoilState} from "recoil";
import {darkState} from "../state/atoms";
import {MdDarkMode} from "react-icons/md";
import {ImSun} from "react-icons/im";

const DarkMode = () => {
    const [dark, setDark] = useRecoilState(darkState);

    const handleClick = () => {
        setDark((prevDark) => !prevDark);
    };

    return (
        <div onClick={handleClick} style={{cursor: "pointer", fontSize: "30px"}}>
            {dark ? <MdDarkMode /> : <ImSun />}
        </div>
    );
};

export default DarkMode;
