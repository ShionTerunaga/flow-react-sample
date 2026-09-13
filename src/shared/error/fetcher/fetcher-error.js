// @flow strict

import { createHttpError } from "../http/http";
import type { HttpError } from "../http/http";
import { fetcherErrorScheme } from "./fetcher-scheme";
import type { FetcherStatus } from "./fetcher-scheme";

export type FetcherBaseError = {|
    type: "fetcherError",
    status: FetcherStatus,
    message: string
|};

export type FetcherError = FetcherBaseError | HttpError;

const createError = (status: FetcherStatus, message: string): FetcherBaseError => ({
    type: "fetcherError",
    status,
    message
});

const { fetchErrorMessage, fetcherErrorStatusScheme, httpErrorStatusResponse } =
    fetcherErrorScheme;

type FetcherErrors = {|
    httpErrorStatusResponse: typeof httpErrorStatusResponse,
    returnNoPermission: HttpError,
    returnNotFoundAPIUrl: HttpError,
    returnBadRequest: HttpError,
    returnInternalServerError: HttpError,
    returnNotSetApiUrl: FetcherBaseError,
    returnSchemeError: FetcherBaseError,
    returnParseError: FetcherBaseError,
    returnFetchFunctionError: FetcherBaseError,
    returnUnknownError: FetcherBaseError
|};

export const createFetcherError: FetcherErrors = {
    httpErrorStatusResponse,
    returnNoPermission: createHttpError.returnNoPermission,
    returnNotFoundAPIUrl: createHttpError.returnNotFoundAPIUrl,
    returnBadRequest: createHttpError.returnBadRequest,
    returnInternalServerError: createHttpError.returnInternalServerError,
    returnNotSetApiUrl: createError(
        fetcherErrorStatusScheme.returnNotSetAPIUrl,
        fetchErrorMessage.returnNotSetAPIUrl
    ),
    returnSchemeError: createError(
        fetcherErrorStatusScheme.returnSchemeError,
        fetchErrorMessage.returnSchemeError
    ),
    returnParseError: createError(
        fetcherErrorStatusScheme.returnParseError,
        fetchErrorMessage.returnParseError
    ),
    returnFetchFunctionError: createError(
        fetcherErrorStatusScheme.returnFetchFunctionError,
        fetchErrorMessage.returnFetchFunctionError
    ),
    returnUnknownError: createError(
        fetcherErrorStatusScheme.returnUnknownError,
        fetchErrorMessage.returnUnknownError
    )
};
