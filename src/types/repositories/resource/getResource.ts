// =============== Repository ===============

export interface IGetResourceRequest {
    id: string
}

export interface IGetResourceResponse {
    id: number
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
