// =============== Service ===============

export interface IGetResourceInput {
    id: string
}

export interface IGetResourceOutput {
    id: number
    domain: string
    github: string
    title: string
    description: string
    content: string
    image: string
    status: string
    published_at: string
    created_at: string
    metaDescription: IMetaDescription
}

export interface IMetaDescription {
    title: string
    description: string
    isFollow: boolean
    isIndex: boolean
    canonical: string
}
