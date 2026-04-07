import { InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { getSession } from 'next-auth/react'

import { IRefreshToken } from '@/types/authentication'
import { env } from '@/utils/env'
import { logger } from '@/utils/logger'

import { BaseApiService } from '../../utils/base/baseHttp'

class Interceptor extends BaseApiService {
    constructor() {
        super({
            baseURL: env.NEXT_PUBLIC_API_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    async requestPromise(config: InternalAxiosRequestConfig) {
        // useSession() can only be used for client side. getSession is used for client and server side.
        const sesion = await getSession()
        logger(sesion, 'sesion interceptor')
        const accessToken = sesion?.accessToken
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config
    }

    requestReject(error: any) {
        return Promise.reject(error)
    }

    responsePromiseHandler(response: AxiosResponse<any>) {
        const data = response?.data

        return data
    }

    async responseRejectHandler(error: any) {
        logger(error, 'Error: Response interceptor')
        const maxRetries = 3
        const configs = error.config

        if (
            error.response &&
            error.response.status === 401 &&
            !configs.__RetryRequest
        ) {
            logger('Retrying request', 'Response interceptor')
            if (configs.__RetryRequest >= maxRetries) {
                // Reject with the error
                return Promise.reject(error)
            }
            configs.__RetryRequest += 1

            const session = await getSession()
            if (!session?.refreshToken) return

            // Access token has expired, refresh it and retry the original request
            try {
                // Refresh Token
                const res = await this.post<IRefreshToken>(
                    '/inventory/v1/refresh-token',
                    {
                        refreshToken: session.refreshToken,
                    }
                )

                configs.headers['Authorization'] = `Bearer ${res.access_token}`
                return this.client(configs)
            } catch (refreshError) {
                // Handle the error from the refresh token request
                return Promise.reject(refreshError)
            }
        }
        return Promise.reject(error)
    }
}

const interceptor = new Interceptor()

export default interceptor
