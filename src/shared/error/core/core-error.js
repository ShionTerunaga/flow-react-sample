// @flow strict

export type ErrorType = "httpError" | "fetcherError" | "objectError";

export type CustomError = {|
    type: ErrorType,
    message: string
|};
