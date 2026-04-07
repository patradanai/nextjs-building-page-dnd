import { z, ZodType } from 'zod'

export interface IUserFormData {
    user: string
    password: string
}

export const UserSchema: ZodType<IUserFormData> = z.object({
    user: z.string(),
    password: z
        .string()
        .min(8, { message: 'Password is too short' })
        .max(20, { message: 'Password is too long' }),
})
