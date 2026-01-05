"use client";

import {RecoilRoot, useRecoilValue} from "recoil";
import {darkState} from "./state/atoms";
import {useEffect} from "react";

function ThemeEffect({children}) {
    const dark = useRecoilValue(darkState);

    useEffect(() => {
        document.body.classList.toggle("dark", dark);
    }, [dark]);

    return children;
}

export default function ThemeProvider({children}) {
    return (
        <RecoilRoot>
            <ThemeEffect>{children}</ThemeEffect>
        </RecoilRoot>
    );
}
