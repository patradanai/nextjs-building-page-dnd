import { create } from 'zustand'

import { loggerStore } from './logger'

export interface IAuthState {
    name?: string
    roles?: string
    permissions: Record<string, any>
    accessToken: string
    refreshToken: string
}

export interface IAuthStore extends IAuthState {
    setAuth: (data: IAuthState) => void
}

const INITIAL_STATE = {
    name: '',
    roles: '',
    permissions: {},
    accessToken: '',
    refreshToken: '',
}

export const useAuthStore = create<IAuthStore>()(
    loggerStore<IAuthStore>(
        (set) => ({
            ...INITIAL_STATE,
            clear: () => set(() => INITIAL_STATE),
            setAuth: (data: IAuthState) =>
                set(() => ({
                    name: data.name,
                    accessToken: data.accessToken,
                    permissions: data.permissions,
                    refreshToken: data.refreshToken,
                    roles: data.roles,
                })),
        }),
        'authStore'
    )
)
