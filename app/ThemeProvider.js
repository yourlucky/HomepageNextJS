"use client";

import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { darkState } from "./state/atoms";


function BodyWithTheme({ children }) {
    const dark = useRecoilValue(darkState);

    return (
        <body className={`${dark ? "dark" : ""}`} >
            {children}
        </body>
    );
}

export default function ThemeProvider({ children }) {
    return (
        <RecoilRoot>
            <BodyWithTheme>{children}</BodyWithTheme>
        </RecoilRoot>
    );
}