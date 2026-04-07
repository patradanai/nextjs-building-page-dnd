import { JWT } from 'next-auth/jwt'
import Credentials from 'next-auth/providers/credentials'

import { authService } from '@/services/implements'
import { env } from '@/utils/env'
import { logger } from '@/utils/logger'

import type { NextAuthOptions } from 'next-auth'

const refreshTokenHandler = async (token: JWT) => {
    logger(token, 'token')
    try {
        if (!token?.refreshToken) throw new Error('RefreshTokenNotFound')

        const response = await authService.refreshToken({
            refresh_token: token?.refreshToken,
        })

        if (response.status !== 200) throw new Error('RefreshAccessTokenError')

        return {
            ...token,
            accessToken: response.data.access_token,
            expiredIn: Date.now() + response.data.expires_in * 1000,
            refreshToken: response.data.refresh_token ?? token.refreshToken, // Fall back to old refresh token
        }
    } catch (error: any) {
        logger(error, 'error refreshTokenHandler')
        return {
            ...token,
            error: error.message,
        }
    }
}

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async signIn() {
            return true
        },
        // async redirect({ url, baseUrl }) {
        //     return baseUrl
        // },
        async session({ session, token }) {
            if (token) {
                session.user = token.user
                session.accessToken = token.accessToken
                session.refreshToken = token.refreshToken
                session.expiredIn = token.expiredIn
                session.userId = token.userId
                session.error = token.error
            }

            return session
        },
        async jwt({ token, user }) {
            if (user) {
                return {
                    accessToken: user.accessToken,
                    expiredIn: Date.now() + user.expiredIn * 1000,
                    refreshToken: user.refreshToken,
                    user,
                }
            }

            if (!token.expiredIn) {
                throw new Error('ExpiredInNotFound')
            }

            // Return previous token if the access token has not expired yet
            if (Date.now() < token.expiredIn) {
                return token
            }

            // Access token has expired, try to update
            const tokenData = refreshTokenHandler(token)
            return {
                tokenData,
                user,
            }
        },
    },
    providers: [
        Credentials({
            name: 'Sign In',
            id: 'credentials',
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'username',
                },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
                try {
                    if (!credentials?.username && !credentials?.password) {
                        return null
                    }

                    const authen = await authService.signIn({
                        username: credentials?.username,
                        password: credentials?.password,
                    })

                    const isPass = !!authen
                    if (!isPass) return null

                    return {
                        email: authen.email,
                        name: authen.name,
                        image: '',
                        accessToken: authen.access_token,
                        refreshToken: authen.refresh_token,
                        id: authen.user_id,
                        userId: authen.user_id,
                        expiredIn: authen.expired_in,
                        role: '',
                    }
                } catch (err: any) {
                    logger(err, 'Error: NextAuth_Authorize')
                    throw err
                }
            },
        }),
    ], // Add providers with an empty array for now
    session: {
        strategy: 'jwt',
    },
    jwt: {
        secret: env.NEXT_PUBLIC_NEXTAUTH_SECRET,
    },
    useSecureCookies: env.NEXT_PUBLIC_ENVIRONMENT === 'production',
    logger: {
        error: (err) => {
            logger(err, 'Error: Next Auth')
        },
    },
    debug: true,
} satisfies NextAuthOptions
