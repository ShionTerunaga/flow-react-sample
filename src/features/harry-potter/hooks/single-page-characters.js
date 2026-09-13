// @flow strict

import * as React from "react";
import { createNone, createSome, isNone } from "../../../shared/utility/option";
import type { Option } from "../../../shared/utility/option";
import { isErr } from "../../../shared/utility/result";
import type { FetcherError } from "../../../shared/error/fetcher";
import type { APIView } from "../model/model-view";
import type { SinglePageGetCharacters } from "./characters.type";
import { getCharacter } from "../service/get-character";

type CharactersState = {|
    isLoading: boolean,
    characters: Array<SinglePageGetCharacters>,
    error: Option<FetcherError>
|};

export hook useSinglePageCharacters(): CharactersState {
    const [fetchCharacter, setFetchCharacter] =
        React.useState<Option<Array<APIView>>>(createNone());
    const [error, setError] = React.useState<Option<FetcherError>>(createNone());

    React.useEffect(() => {
        let isMounted = true;

        getCharacter().then((result) => {
            if (!isMounted) {
                return;
            }

            if (isErr(result)) {
                setError(createSome(result.err));
                return;
            }

            if (!isNone(result.value)) {
                setFetchCharacter(createSome(result.value.value));
            }
        });

        return () => {
            isMounted = false;
        };
    }, []);

    const isLoading = isNone(fetchCharacter) && isNone(error);
    const characters = React.useMemo<Array<SinglePageGetCharacters>>(() => {
        if (isNone(fetchCharacter)) {
            return [];
        }

        return fetchCharacter.value.map(({ id, name, image }) => ({
            id,
            name,
            image
        }));
    }, [fetchCharacter]);

    return { isLoading, characters, error };
}
