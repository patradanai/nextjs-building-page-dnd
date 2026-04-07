import interceptor from '@/repositories/implements/interceptor'
import {
    IGetRefreshTokenRequest,
    IGetRefreshTokenResponse,
    ISignInRequest,
    ISignInResponse,
    ISignOutRequest,
    ISignOutResponse,
    ISignUpRequest,
    ISignUpResponse,
} from '@/types/authentication'
import { IHTTPResponse } from '@/types/common'
import { BaseApiService } from '@/utils/base/baseHttp'
import { env } from '@/utils/env'

import { IAuthRepository } from '../authRepository'

export class AuthRepositoryImpl
    extends BaseApiService
    implements IAuthRepository
{
    constructor() {
        super({
            baseURL: env.NEXT_PUBLIC_API_URL + '/inventory/v1/',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        // this.setRequestInterceptor(
        //     interceptor.requestPromise,
        //     interceptor.requestReject
        // )
        this.setResponseInterceptor(
            interceptor.responsePromiseHandler,
            interceptor.responseRejectHandler
        )
    }

    async signIn(data: ISignInRequest): Promise<ISignInResponse> {
        const res = await this.post<IHTTPResponse<ISignInResponse>>(
            '/signin',
            data
        )

        return res.data
    }

    async signOut(data: ISignOutRequest): Promise<ISignOutResponse> {
        const res = await this.post<IHTTPResponse<ISignOutResponse>>(
            '/signout',
            { ...data }
        )

        return res.data
    }

    async signUp(
        data: ISignUpRequest
    ): Promise<IHTTPResponse<ISignUpResponse>> {
        const res = await this.post<IHTTPResponse<ISignUpResponse>>('/signup', {
            ...data,
        })

        return res
    }

    async refreshToken(
        data: IGetRefreshTokenRequest
    ): Promise<IHTTPResponse<IGetRefreshTokenResponse>> {
        const res = await this.post<IHTTPResponse<IGetRefreshTokenResponse>>(
            '/refresh-token',
            { ...data }
        )

        return res
    }
}
