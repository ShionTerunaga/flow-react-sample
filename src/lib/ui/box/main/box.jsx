// @flow strict

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import { boxVariants } from "./box.stylex";

export type BoxWidth = "small" | "middle" | "big" | "auto" | "full";
export type BoxHeight = "small" | "middle" | "big" | "auto" | "full";
export type BoxShadow = "none" | "small" | "middle" | "big";
export type BoxColor =
    | "white"
    | "lightGray"
    | "gray"
    | "darkGray"
    | "black"
    | "red"
    | "blue"
    | "green";
export type BoxBorder = "none" | "thin" | "middle" | "thick";
export type BoxBorderRadius = "none" | "small" | "middle" | "big" | "full";

export component Box(
    as: "div" | "section" | "article" | "main" = "div",
    width: BoxWidth = "auto",
    height: BoxHeight = "auto",
    boxShadow: BoxShadow = "none",
    color: BoxColor = "white",
    border: BoxBorder = "none",
    borderRadius: BoxBorderRadius = "none",
    style?: { [key: string]: string | number | void },
    xstyle?: any,
    children: React.Node
) {
    const styles = [
        boxVariants.boxWidthStyle[width],
        boxVariants.boxHeightStyle[height],
        boxVariants.boxShadowStyle[boxShadow],
        boxVariants.colorStyle[color],
        boxVariants.border[border],
        boxVariants.boxBorderRadiusStyle[borderRadius],
        xstyle
    ];
    const Component = as;

    return (
        <Component {...stylex.props(styles)} style={style}>
            {children}
        </Component>
    );
}
