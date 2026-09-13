// @flow strict

import { createSome, optionConversion } from "../../../shared/utility/option";
import type { Option } from "../../../shared/utility/option";
import { createOk } from "../../../shared/utility/result";
import type { Result } from "../../../shared/utility/result";
import type { FetcherError } from "../../../shared/error/fetcher";
import type { APIRes } from "../model/model-res";
import type { APIView } from "../model/model-view";

export function parseApi(
    api: APIRes
): Result<Option<Array<APIView>>, FetcherError> {
    const characters = api
        .filter((item) => item.image !== "")
        .map((item): APIView => {
            const {
                alternate_names,
                alternate_actors,
                dateOfBirth,
                yearOfBirth,
                wand,
                ...rest
            } = item;

            return {
                ...rest,
                alternateNames: alternate_names,
                alternateActors: alternate_actors,
                dateOfBirth: optionConversion(dateOfBirth),
                yearOfBirth: optionConversion(yearOfBirth),
                wand: {
                    wood: wand.wood,
                    core: wand.core,
                    length: optionConversion(wand.length)
                }
            };
        });

    return createOk(createSome(characters));
}
