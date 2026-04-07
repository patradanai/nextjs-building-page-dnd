import { z, ZodType } from 'zod'

export interface IContentFormData {
    domain: string
    github: string
    blogId: string
    title: string
    description: string
    content: string
    image: string
    metaDescription: {
        title: string
        description: string
        isFollow: boolean
        isIndex: boolean
        canonical: string
    }
}

export const ContentSchema: ZodType<IContentFormData> = z.object({
    domain: z.string(),
    github: z.string(),
    blogId: z.string(),
    title: z.string(),
    description: z.string(),
    content: z.string(),
    image: z.string(),
    metaDescription: z.object({
        title: z.string(),
        description: z.string(),
        isFollow: z.boolean(),
        isIndex: z.boolean(),
        canonical: z.string(),
    }),
})
