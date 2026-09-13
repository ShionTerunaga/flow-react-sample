// @flow strict

import { appConfig } from "../../../shared/config/config";
import { hasParseFetcher } from "../../../services/fetcher-get";
import type { FetcherError } from "../../../shared/error/fetcher";
import type { Option } from "../../../shared/utility/option";
import type { Result } from "../../../shared/utility/result";
import { APIScheme } from "../model/model-res";
import type { APIRes } from "../model/model-res";
import type { APIView } from "../model/model-view";
import { parseApi } from "./parse-api";

export async function getCharacter(
    cache?: RequestCache
): Promise<Result<Option<Array<APIView>>, FetcherError>> {
    return hasParseFetcher<APIRes, Array<APIView>>({
        url: appConfig.apiKey,
        scheme: APIScheme,
        cache,
        parse: parseApi
    });
}
