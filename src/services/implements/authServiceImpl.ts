import { HttpException } from '@/exceptions/exceptionHttp'
import { reposities } from '@/repositories'
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

import { IAuthService } from '../authService'

export class AuthServiceImpl implements IAuthService {
    constructor() {}

    async signIn(data: ISignInRequest): Promise<ISignInResponse> {
        try {
            const res = await reposities.authRepository.signIn(data)

            return res
        } catch (error: any) {
            throw new HttpException(error)
        }
    }

    async signOut(data: ISignOutRequest): Promise<ISignOutResponse> {
        try {
            const res = await reposities.authRepository.signOut(data)

            return res
        } catch (error: any) {
            throw new HttpException(error)
        }
    }

    async signUp(
        data: ISignUpRequest
    ): Promise<IHTTPResponse<ISignUpResponse>> {
        try {
            const res = await reposities.authRepository.signUp(data)

            return res
        } catch (error: any) {
            throw new HttpException(error)
        }
    }

    async refreshToken(
        data: IGetRefreshTokenRequest
    ): Promise<IHTTPResponse<IGetRefreshTokenResponse>> {
        try {
            const res = await reposities.authRepository.refreshToken(data)

            return res
        } catch (error: any) {
            throw new HttpException(error)
        }
    }
}
