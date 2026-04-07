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

export abstract class IAuthService {
    abstract signIn(data: ISignInRequest): Promise<ISignInResponse>
    abstract signOut(data: ISignOutRequest): Promise<ISignOutResponse>
    abstract signUp(
        data: ISignUpRequest
    ): Promise<IHTTPResponse<ISignUpResponse>>
    abstract refreshToken(
        refreshToken: IGetRefreshTokenRequest
    ): Promise<IHTTPResponse<IGetRefreshTokenResponse>>
}
