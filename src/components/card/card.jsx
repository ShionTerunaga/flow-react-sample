// @flow strict

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import { Box } from "../../lib/ui";
import cardStyles from "./card.stylex";

export component Card(
    title: string,
    src: string,
    alt: string,
    boxHeight: number,
    srcWidth: number,
    srcHeight: number
) {
    return (
        <Box
            xstyle={cardStyles.cardContainer}
            style={{ width: srcWidth, height: boxHeight }}
        >
            <img
                src={src}
                alt={alt}
                {...stylex.props(cardStyles.image)}
                width={srcWidth}
                height={srcHeight}
            />
            <p {...stylex.props(cardStyles.title)}>{title}</p>
        </Box>
    );
}
