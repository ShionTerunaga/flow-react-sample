// @flow strict

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import fontCenterStyles from "./font-center.stylex";

export component FontCenter(
    as: "p" | "span" | "div" | "section" | "article" | "main" = "p",
    xstyle?: any,
    style?: { [key: string]: string | number | void },
    children: React.Node
) {
    const Component = as;

    return (
        <Component
            {...stylex.props(fontCenterStyles.base, xstyle)}
            style={style}
        >
            {children}
        </Component>
    );
}
