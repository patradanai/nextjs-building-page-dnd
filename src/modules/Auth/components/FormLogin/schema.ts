import { z } from 'zod'

export const UserSchema = z.object({
    user: z.string(),
    password: z
        .string()
        .min(8, { message: 'Password is too short' })
        .max(20, { message: 'Password is too long' }),
})

export type IUserFormData = z.infer<typeof UserSchema>
