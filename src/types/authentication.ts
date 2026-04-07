export interface IRefreshToken {
    user_id: string
    name: string
    access_token: string
    expires_in: number
    refresh_token: string
    role_id: string
    role_name: string
    permission: {
        create: boolean
        delete: boolean
        read: boolean
        update: boolean
    }
}

export interface IGetRefreshTokenRequest {
    refresh_token: string
}

export type IGetRefreshTokenResponse = IRefreshToken

export interface ISignInRequest {
    username: string
    password: string
}

export interface ISignInResponse {
    access_token: string
    refresh_token: string
    expired_in: number
    roles: string[]
    permissions: Record<string, any>
    name: string
    email: string
    user_id: string
}

export interface ISignOutRequest {
    username: string
}

export type ISignOutResponse = Record<string, never>

export type ISignUpRequest = Record<string, never>

export type ISignUpResponse = Record<string, never>
