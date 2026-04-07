import {
    ISignInRequest,
    ISignInResponse,
    ISignOutRequest,
    ISignOutResponse,
    ISignUpRequest,
    ISignUpResponse,
    IGetRefreshTokenRequest,
    IGetRefreshTokenResponse,
} from '@/types/authentication'
import { IHTTPResponse } from '@/types/common'

import { IAuthRepository } from '../authRepository'

export class AuthRepositoryImplMock implements IAuthRepository {
    signIn(_data: ISignInRequest): Promise<ISignInResponse> {
        throw new Error('Method not implemented.')
    }
    signOut(_data: ISignOutRequest): Promise<ISignOutResponse> {
        throw new Error('Method not implemented.')
    }
    signUp(_data: ISignUpRequest): Promise<IHTTPResponse<ISignUpResponse>> {
        throw new Error('Method not implemented.')
    }
    refreshToken(
        _refreshToken: IGetRefreshTokenRequest
    ): Promise<IHTTPResponse<IGetRefreshTokenResponse>> {
        throw new Error('Method not implemented.')
    }
}
