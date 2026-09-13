// @flow strict

export type None = {|
    kind: "none"
|};

export type Some<T> = {|
    kind: "some",
    value: T
|};

export type Option<T> = None | Some<T>;

export function createNone(): None {
    return { kind: "none" };
}

export function createSome<T>(value: T): Some<T> {
    return { kind: "some", value };
}

export function optionConversion<T>(value: ?T): Option<T> {
    return value == null ? createNone() : createSome(value);
}

export function isNone<T>(option: Option<T>): option is None {
    return option.kind === "none";
}

export function isSome<T>(option: Option<T>): option is Some<T> {
    return option.kind === "some";
}
