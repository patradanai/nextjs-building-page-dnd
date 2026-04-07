import { IPaginationRequest } from '../../pagination'

export type IGetListResourceRequest = IPaginationRequest

export type IGetListResourceResponse = IGetListResourceData[]

export interface IGetListResourceData {
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
