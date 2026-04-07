import { IPaginationResponse } from './pagination'

export interface IHTTPResponse<T> {
    status: number
    code: string
    message: string
    data: T
}

export type WrapperResponse<T> = IHTTPResponse<T>

export type WrapperResponsePagination<T> = IHTTPResponse<IPaginationResponse<T>>

// export interface IHttpError<T> {}

// Selection

export interface ISelectionOptions {
    label: string
    value: any
}
