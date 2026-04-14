import { z } from 'zod'

export const ContentSchema = z.object({
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

export type IContentFormData = z.infer<typeof ContentSchema>
