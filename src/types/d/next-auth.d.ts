/* eslint-disable @typescript-eslint/naming-convention */
import { DefaultSession, DefaultJWT, DefaultUser } from 'next-auth'

type UserProfile = { id: string } & DefaultSession['user']
declare module 'next-auth' {
    interface Session extends DefaultSession {
        userId?: string
        user?: UserProfile
        accessToken?: string
        refreshToken?: string
        expiredIn?: number
        error?: string
    }

    interface User extends DefaultUser {
        userId: string
        accessToken: string
        refreshToken: string
        expiredIn: number
        role: string
    }
}
declare module 'next-auth/jwt' {
    interface JWT extends DefaultJWT {
        userId?: string
        user?: UserProfile
        refreshToken?: string
        accessToken?: string
        expiredIn?: number
        error?: string
    }
}
