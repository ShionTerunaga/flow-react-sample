// @flow strict

export type Ok<T> = {|
    ok: true,
    value: T
|};

export type Err<E> = {|
    ok: false,
    err: E
|};

export type Result<T, E> = Ok<T> | Err<E>;

export function createOk<T>(value: T): Ok<T> {
    return { ok: true, value };
}

export function createErr<E>(err: E): Err<E> {
    return { ok: false, err };
}

export function isOk<T, E>(result: Result<T, E>): result is Ok<T> {
    return result.ok;
}

export function isErr<T, E>(result: Result<T, E>): result is Err<E> {
    return !result.ok;
}

export async function checkPromiseReturn<T, E>({
    fn,
    err
}: {
    fn: () => Promise<T>,
    err: (error: unknown) => Err<E>
}): Promise<Result<T, E>> {
    try {
        return createOk(await fn());
    } catch (error) {
        return err(error);
    }
}
