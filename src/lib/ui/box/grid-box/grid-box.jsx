// @flow strict

import * as React from "react";
import {
    gridBoxBaseStyles,
    gridBoxGap,
    gridBoxGridTemplate
} from "./grid-box.stylex";
import { Box } from "../main/box";

export component GridBox(
    gap: "smallGap" | "medium" | "large" = "large",
    gridTemplateColumns: "three" | "four" | "five" = "three",
    children: React.Node
) {
    const styles = [
        gridBoxGap[gap],
        gridBoxGridTemplate[gridTemplateColumns],
        gridBoxBaseStyles.base
    ];

    return <Box xstyle={styles}>{children}</Box>;
}
