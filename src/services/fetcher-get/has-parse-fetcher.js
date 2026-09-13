// @flow strict

import { createNone, isNone } from "../../shared/utility/option";
import type { Option } from "../../shared/utility/option";
import { createOk, isErr } from "../../shared/utility/result";
import type { Result } from "../../shared/utility/result";
import type { FetcherError } from "../../shared/error/fetcher";
import { fetcher } from "./fetcher";

type Params<T, S> = {|
    url: Option<string>,
    scheme: unknown,
    cache?: RequestCache,
    parse: (value: T) => Result<Option<S>, FetcherError>
|};

export async function hasParseFetcher<T, S>({
    url,
    scheme,
    cache,
    parse
}: Params<T, S>): Promise<Result<Option<S>, FetcherError>> {
    const result = await fetcher<T>({ url, scheme, cache });

    if (isErr(result)) {
        return result;
    }

    if (isNone(result.value)) {
        return createOk(createNone());
    }

    return parse(result.value.value);
}
