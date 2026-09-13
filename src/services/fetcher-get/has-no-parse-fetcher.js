// @flow strict

import type { Option } from "../../shared/utility/option";
import type { Result } from "../../shared/utility/result";
import type { FetcherError } from "../../shared/error/fetcher";
import { fetcher } from "./fetcher";

type Params = {|
    url: Option<string>,
    scheme: unknown,
    cache?: RequestCache
|};

export async function hasNoParseFetcher<T>(
    params: Params
): Promise<Result<Option<T>, FetcherError>> {
    return fetcher<T>(params);
}
