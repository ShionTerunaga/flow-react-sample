// @flow strict

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import { textColor } from "../../../shared/theme/design-system.stylex";
import type { TextTheme } from "../../../shared/theme/design-system.stylex";
import { headingFontStyle } from "./heading.stylex";

export type HeadingFont = "firstSmall" | "firstMiddle" | "firstBig";

export component Heading(
    as: "h1" | "h2" | "h3" = "h1",
    fontStyle: HeadingFont = "firstBig",
    color: TextTheme = "textNormal",
    xstyle?: any,
    style?: { [key: string]: string | number | void },
    children: React.Node
) {
    const Component = as;

    return (
        <Component
            {...stylex.props(
                headingFontStyle[fontStyle],
                textColor[color],
                xstyle
            )}
            style={style}
        >
            {children}
        </Component>
    );
}
