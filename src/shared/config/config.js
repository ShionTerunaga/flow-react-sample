// @flow strict

import { optionConversion } from "../utility/option";
import type { Option } from "../utility/option";

const environment = import.meta.env as any;

export const appConfig: { apiKey: Option<string> } = {
    apiKey: optionConversion(environment.VITE_API_KEY)
};
