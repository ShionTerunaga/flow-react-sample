// @flow strict

import * as v from "valibot";

export type APICharacter = {|
    id: string,
    name: string,
    alternate_names: Array<string>,
    species: string,
    gender: "male" | "female" | "",
    house: string,
    dateOfBirth: ?string,
    yearOfBirth: ?number,
    wizard: boolean,
    ancestry: string,
    eyeColour: string,
    hairColour: string,
    wand: {|
        wood: string,
        core: string,
        length: ?number
    |},
    patronus: string,
    hogwartsStudent: boolean,
    hogwartsStaff: boolean,
    actor: string,
    alternate_actors: Array<string>,
    alive: boolean,
    image: string
|};

export type APIRes = Array<APICharacter>;

export const APIScheme: any = v.array(
    v.strictObject({
        id: v.string(),
        name: v.string(),
        alternate_names: v.array(v.string()),
        species: v.string(),
        gender: v.union([v.literal("male"), v.literal("female"), v.literal("")]),
        house: v.string(),
        dateOfBirth: v.nullable(v.string()),
        yearOfBirth: v.nullable(v.number()),
        wizard: v.boolean(),
        ancestry: v.string(),
        eyeColour: v.string(),
        hairColour: v.string(),
        wand: v.object({
            wood: v.string(),
            core: v.string(),
            length: v.nullable(v.number())
        }),
        patronus: v.string(),
        hogwartsStudent: v.boolean(),
        hogwartsStaff: v.boolean(),
        actor: v.string(),
        alternate_actors: v.array(v.string()),
        alive: v.boolean(),
        image: v.string()
    })
);
