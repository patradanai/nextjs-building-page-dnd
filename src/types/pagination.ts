export interface IPaginationRequest {
    offset?: number
    limit?: number
    criterias?: IPaginationDetail[]
    sort_by?: IPaginationDetail[]
}

export interface IPaginationDetail {
    key: string // Field
    value: any // Value
}

export interface IPaginationResponse<T> {
    rows: T
    total_count: number
}
