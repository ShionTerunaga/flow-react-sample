// @flow strict

import { createHttpScheme } from "./http-scheme";
import type { HttpCustomStatus } from "./http-scheme";

export type HttpError = {|
    type: "httpError",
    status: HttpCustomStatus,
    message: string
|};

const createError = (status: HttpCustomStatus, message: string): HttpError => ({
    type: "httpError",
    status,
    message
});

type HttpErrors = {|
    returnNotFoundAPIUrl: HttpError,
    returnNoPermission: HttpError,
    returnBadRequest: HttpError,
    returnInternalServerError: HttpError
|};

export const createHttpError: HttpErrors = {
    returnNotFoundAPIUrl: createError(
        createHttpScheme.httpCustomStatusScheme.returnNotFoundAPIUrl,
        createHttpScheme.httpErrorMessage.returnNotFoundAPIUrl
    ),
    returnNoPermission: createError(
        createHttpScheme.httpCustomStatusScheme.returnNoPermission,
        createHttpScheme.httpErrorMessage.returnNoPermission
    ),
    returnBadRequest: createError(
        createHttpScheme.httpCustomStatusScheme.returnBadRequest,
        createHttpScheme.httpErrorMessage.returnBadRequest
    ),
    returnInternalServerError: createError(
        createHttpScheme.httpCustomStatusScheme.returnInternalServerError,
        createHttpScheme.httpErrorMessage.returnInternalServerError
    )
};
