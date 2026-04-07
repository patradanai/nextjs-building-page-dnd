export interface IPatchResourceRequest {
    id: string
    data: IPatchResourceRequestData
}

export type IPatchResourceRequestData = Record<string, never>

export interface IPatchResourceResponse {
    id: string
}
