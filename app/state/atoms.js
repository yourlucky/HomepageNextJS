import {atom} from "recoil";

export const counterState = atom({
    key: "count",
    default: 10,
});

export const darkState = atom({
    key: "dark",
    default: false,
});
