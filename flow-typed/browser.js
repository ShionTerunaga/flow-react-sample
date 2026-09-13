declare type RequestCache =
    | "default"
    | "no-store"
    | "reload"
    | "no-cache"
    | "force-cache"
    | "only-if-cached";

declare class Response {
    ok: boolean;
    status: number;
    json(): Promise<any>;
}

declare function fetch(
    input: string,
    init?: { cache?: RequestCache }
): Promise<Response>;

declare var document: {
    getElementById(id: string): any
};
