// @flow

import * as stylex from "@stylexjs/stylex";

//本来プロジェクトでgapのパターンがいくつかあったら定義する
export const gridBoxGap = stylex.create({
    smallGap: {
        gap: 8
    },
    medium: {
        gap: 16
    },
    large: {
        gap: 24
    }
});

export const gridBoxGridTemplate = stylex.create({
    three: {
        gridTemplateColumns: "repeat(3, 1fr)"
    },
    four: {
        gridTemplateColumns: "repeat(4, 1fr)"
    },
    five: {
        gridTemplateColumns: "repeat(5, 1fr)"
    }
});

export const gridBoxBaseStyles = stylex.create({
    base: {
        display: "grid",
        justifyItems: "center",
        alignItems: "start",
        width: "100%",
        "@media (max-width: 980px)": {
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))"
        },
        "@media (max-width: 640px)": {
            gridTemplateColumns: "repeat(1, minmax(0, 1fr))"
        }
    }
});
