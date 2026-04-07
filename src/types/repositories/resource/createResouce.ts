export interface ICreateResourceRequest {
    domain: string
    github: string
    title: string
    description: string
    content: string
    image: string
    status: string
    metaDescription: {
        title: string
        description: string
        isFollow: boolean
        isIndex: boolean
        canonical: string
    }
}

export interface ICreateResourceResponse {
    id: string
}
