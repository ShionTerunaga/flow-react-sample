// @flow strict

import { createHttpScheme } from "../http/http-scheme";
import type { HttpCustomStatus } from "../http/http-scheme";

export type FetcherStatus = HttpCustomStatus | 4040 | 5000 | 8000 | 9000 | 9999;

type FetcherErrorScheme = {|
    httpErrorStatusResponse: typeof createHttpScheme.httpErrorStatusResponse,
    fetcherErrorStatusScheme: {|
        returnNotFoundAPIUrl: 4041,
        returnNoPermission: 4031,
        returnBadRequest: 4001,
        returnInternalServerError: 5001,
        returnNotSetAPIUrl: 4040,
        returnSchemeError: 5000,
        returnParseError: 8000,
        returnFetchFunctionError: 9000,
        returnUnknownError: 9999
    |},
    fetchErrorMessage: { [key: string]: string }
|};

export const fetcherErrorScheme: FetcherErrorScheme = {
    httpErrorStatusResponse: createHttpScheme.httpErrorStatusResponse,
    fetcherErrorStatusScheme: {
        ...createHttpScheme.httpCustomStatusScheme,
        returnNotSetAPIUrl: 4040,
        returnSchemeError: 5000,
        returnParseError: 8000,
        returnFetchFunctionError: 9000,
        returnUnknownError: 9999
    },
    fetchErrorMessage: {
        ...createHttpScheme.httpErrorMessage,
        returnNotSetAPIUrl: "APIのURLが設定されていません",
        returnSchemeError: "スキームエラーが発生しました",
        returnParseError: "データのパースに失敗しました",
        returnFetchFunctionError: "フェッチ関数でエラーが発生しました",
        returnUnknownError: "不明なエラーが発生しました"
    }
};
