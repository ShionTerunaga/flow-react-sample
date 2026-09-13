// @flow strict

import * as v from "valibot";
import { createNone, createSome, isNone } from "../../shared/utility/option";
import type { Option } from "../../shared/utility/option";
import {
    checkPromiseReturn,
    createErr,
    createOk,
    isErr
} from "../../shared/utility/result";
import type { Result } from "../../shared/utility/result";
import { createFetcherError } from "../../shared/error/fetcher";
import type { FetcherError } from "../../shared/error/fetcher";
import { createHttpScheme } from "../../shared/error/http";

type FetcherParams = {|
    url: Option<string>,
    scheme: unknown,
    cache?: RequestCache
|};

export async function fetcher<T>({
    url,
    scheme,
    cache
}: FetcherParams): Promise<Result<Option<T>, FetcherError>> {
    const { notFound, forbidden, badRequest, internalServerError } =
        createHttpScheme.httpErrorStatusResponse;
    const {
        returnNotSetApiUrl,
        returnNotFoundAPIUrl,
        returnNoPermission,
        returnBadRequest,
        returnSchemeError,
        returnUnknownError,
        returnFetchFunctionError,
        returnInternalServerError
    } = createFetcherError;

    if (isNone(url)) {
        return createErr(returnNotSetApiUrl);
    }

    const responseResult = await checkPromiseReturn<Response, FetcherError>({
        fn: () => fetch(url.value, { cache }),
        err: (error) => {
            console.error(error);
            return createErr(returnFetchFunctionError);
        }
    });

    if (isErr(responseResult)) {
        return responseResult;
    }

    if (!responseResult.value.ok) {
        switch (responseResult.value.status) {
            case notFound:
                return createErr(returnNotFoundAPIUrl);
            case forbidden:
                return createErr(returnNoPermission);
            case badRequest:
                return createErr(returnBadRequest);
            case internalServerError:
                return createErr(returnInternalServerError);
            default:
                return createErr(returnUnknownError);
        }
    }

    const responseValue = await responseResult.value.json();
    const parsed = v.safeParse(scheme, responseValue);

    if (!parsed.success) {
        return createErr(returnSchemeError);
    }

    if (parsed.output == null) {
        return createOk(createNone());
    }

    return createOk(createSome(parsed.output as any));
}
