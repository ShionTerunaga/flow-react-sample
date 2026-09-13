// @flow

import * as stylex from "@stylexjs/stylex";
import { appTheme } from "./theme.stylex";

export const textColor = stylex.create({
    textNormal: { color: appTheme.textNormal },
    textWhite: { color: appTheme.white }
});

export const backgroundColor = stylex.create({
    likeBlue: { backgroundColor: appTheme.likeBlue },
    likeGreen: { backgroundColor: appTheme.likeGreen },
    popupBackground: { backgroundColor: appTheme.popupBackground }
});

export type TextTheme = "textNormal" | "textWhite";
export type BackgroundTheme = "likeBlue" | "likeGreen" | "popupBackground";
