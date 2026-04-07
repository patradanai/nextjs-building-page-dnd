import { IPaginationRequest } from '../../pagination'

export type IGetListResourceInput = IPaginationRequest

export interface IGetListResourceOutput {
    total_count: number
    rows: IGetListResourceDataOutput[]
}

export interface IGetListResourceDataOutput {
    id: string
    domain: string
    github: string
    title: string
    description: string
    content: string
    image: string
    status: string
    created_at: string
    published_at: string
    metaDescription: {
        title: string
        description: string
        isFollow: boolean
        isIndex: boolean
        canonical: string
    }
}
