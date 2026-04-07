'use client'
import React, { useState, useEffect } from 'react'

import { useRouter } from 'next/navigation'

import { PermissionPage } from '@/app/401'
import { useRefreshToken } from '@/hooks/useAuth'
import { useAuthStore } from '@/stores/useAuthStore'
import { logger } from '@/utils/logger'

export const withAuth = (Component: any) => {
    const AuthenticatedComponent = (props: any) => {
        const [permission, setPermission] = useState(true)

        // hooks
        const router = useRouter()
        const { mutateAsync: asyncMutateToken, isError } = useRefreshToken()

        const setAuth = useAuthStore((state) => state.setAuth)

        useEffect(() => {
            const accessToken = localStorage.getItem('accessToken')
            const refreshToken = localStorage.getItem('refreshToken')

            if (accessToken && refreshToken) {
                asyncMutateToken({
                    refreshToken: refreshToken,
                }).then((resRefresh) => {
                    if (resRefresh.status < 200 || resRefresh.status >= 300) {
                        router.push('/login')
                        return
                    }
                    // Set Auth
                    localStorage.setItem(
                        'accessToken',
                        resRefresh?.data?.access_token
                    )
                    localStorage.setItem(
                        'refreshToken',
                        resRefresh?.data?.refresh_token
                    )
                    setAuth({
                        accessToken: resRefresh?.data.access_token,
                        refreshToken: resRefresh?.data.refresh_token,
                        permissions: resRefresh?.data.permission,
                        name: resRefresh?.data.name,
                        roles: resRefresh?.data.role_name,
                    })
                })

                setPermission(true)
            } else {
                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')

                router.push('/login')
            }
        }, [])

        useEffect(() => {
            const intervalFetchToken = async () => {
                logger('Interval Refresh')

                const refreshToken = localStorage.getItem('refreshToken')
                if (!refreshToken) {
                    return
                }

                const resRefresh = await asyncMutateToken({
                    refreshToken: refreshToken,
                })

                if (resRefresh.status < 200 || resRefresh.status >= 300) {
                    router.push('/login')
                    return
                }
                // Set Auth
                localStorage.setItem(
                    'accessToken',
                    resRefresh?.data?.access_token
                )
                localStorage.setItem(
                    'refreshToken',
                    resRefresh?.data?.refresh_token
                )
                setAuth({
                    accessToken: resRefresh?.data.access_token,
                    refreshToken: resRefresh?.data.refresh_token,
                    permissions: resRefresh?.data.permission,
                    name: resRefresh?.data.name,
                    roles: resRefresh?.data.role_name,
                })
            }

            intervalFetchToken()

            const interval = setInterval(intervalFetchToken, 5 * 60 * 1000)

            return () => clearInterval(interval)
        }, [])

        if (isError) {
            router.push('/login')
        }

        return permission ? <Component {...props} /> : <PermissionPage />
    }
    return AuthenticatedComponent
}
