// @flow strict

export type HttpStatus = 400 | 403 | 404 | 500;
export type HttpCustomStatus = 4001 | 4031 | 4041 | 5001;

export type HttpErrorScheme = {|
    httpErrorStatusResponse: {|
        notFound: 404,
        internalServerError: 500,
        forbidden: 403,
        badRequest: 400
    |},
    httpCustomStatusScheme: {|
        returnNotFoundAPIUrl: 4041,
        returnNoPermission: 4031,
        returnBadRequest: 4001,
        returnInternalServerError: 5001
    |},
    httpErrorMessage: {|
        returnNotFoundAPIUrl: string,
        returnNoPermission: string,
        returnBadRequest: string,
        returnInternalServerError: string
    |}
|};

export const createHttpScheme: HttpErrorScheme = {
    httpErrorStatusResponse: {
        notFound: 404,
        internalServerError: 500,
        forbidden: 403,
        badRequest: 400
    },
    httpCustomStatusScheme: {
        returnNotFoundAPIUrl: 4041,
        returnNoPermission: 4031,
        returnBadRequest: 4001,
        returnInternalServerError: 5001
    },
    httpErrorMessage: {
        returnNotFoundAPIUrl: "APIのURLが見つかりません",
        returnNoPermission: "権限がありません",
        returnBadRequest: "不正なリクエストです",
        returnInternalServerError: "サーバーエラーです"
    }
};
