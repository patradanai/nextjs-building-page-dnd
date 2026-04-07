import { useMutation } from '@tanstack/react-query'

import { useSnackBar } from '@/components/providers/snackbarProvider'
import { HttpException } from '@/exceptions/exceptionHttp'
import { authService } from '@/services/implements'
import {
    IGetRefreshTokenResponse,
    ISignInRequest,
    ISignInResponse,
    ISignOutRequest,
    ISignOutResponse,
} from '@/types/authentication'
import { IHTTPResponse } from '@/types/common'
import { logger } from '@/utils/logger'

export const useSignIn = () => {
    const { enqueueSnackbar } = useSnackBar()

    return useMutation<ISignInResponse, unknown, ISignInRequest, unknown>({
        mutationFn: ({ username, password }) =>
            authService.signIn({ username: username, password: password }),
        onSuccess: () => {
            logger('Success', 'Successfully signed in')
            // UseSnackbar Success
            enqueueSnackbar({
                message: '[Auth] Success Status 200',
                type: 'success',
            })
        },
        onError: (err: any) => {
            // UseSnackbar Error
            if (err instanceof HttpException) {
                logger(err.code, 'Error while signing in')
                logger(err.message, 'Error while signing in')

                if (err.code === 'E1RO10015') {
                    enqueueSnackbar({
                        message: '[Auth] Username or password is incorrect',
                        type: 'error',
                    })
                }
            }
        },
    })
}

export const useSignout = () => {
    const { enqueueSnackbar } = useSnackBar()

    return useMutation<ISignOutResponse, unknown, ISignOutRequest, unknown>({
        mutationFn: ({ username }) =>
            authService.signOut({ username: username }),
        onSuccess: () => {
            logger('Success', 'Successfully signed in')
            // UseSnackbar Success
            enqueueSnackbar({
                message: '[Auth] Success Status 200',
                type: 'success',
            })
        },
        onError: (err: any) => {
            // UseSnackbar Error
            if (err instanceof HttpException) {
                logger(err.code, 'Error while signing in')
                logger(err.message, 'Error while signing in')

                if (err.code === 'E1RO10015') {
                    enqueueSnackbar({
                        message: '[Auth] Username or password is incorrect',
                        type: 'error',
                    })
                }
            }
        },
    })
}

// export const useSignUp = () => {
//     return useMutation<any>(() => {})
// }

export const useRefreshToken = () => {
    const { enqueueSnackbar } = useSnackBar()

    return useMutation<
        IHTTPResponse<IGetRefreshTokenResponse>,
        unknown,
        {
            refreshToken: string
        },
        unknown
    >({
        mutationFn: ({ refreshToken }) =>
            authService.refreshToken({ refresh_token: refreshToken }),
        onError: (err: any) => {
            // UseSnackbar Error
            if (err instanceof HttpException) {
                logger(err.code, 'Error while signing in')
                logger(err.message, 'Error while signing in')

                enqueueSnackbar({
                    message: `[Employee] Error ${err.code} ${
                        err.message || ''
                    }`,
                    type: 'error',
                })
            }
        },
        gcTime: 5 * 60 * 1000, // 5 * 60 * 1000 = 1 hour
    })
}
