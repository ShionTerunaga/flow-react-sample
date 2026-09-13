// @flow

import { Card } from "../../../components/card";

const meta = {
    title: "layouts/card",
    component: Card,
    parameters: {
        layout: "fullscreen"
    }
};

export default meta;

export const Sample1 = {
    args: {
        key: "sample1",
        title: "sample",
        src: "https://placehold.jp/150x150.png",
        alt: "",
        boxHeight: 250,
        srcWidth: 150,
        srcHeight: 150
    }
};

export const Sample2 = {
    args: {
        key: "sample2",
        title: "sample",
        src: "https://placehold.jp/250x300.png",
        alt: "",
        boxHeight: 400,
        srcWidth: 300,
        srcHeight: 250
    }
};
