import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { IMenus } from '@/types/global'

import { loggerStore } from './logger'

export interface IGlobalState {
    menus: IMenus[]
    isShowSidebar: boolean
    name: string
    icon: string
    version: string
}

export interface IGlobalStore extends IGlobalState {
    clear: () => void
    setIsSidebarOpen: (state: boolean) => void
}

const storageName = 'globalStore'

const INITIAL_STATE = {
    menus: [],
    isShowSidebar: true,
    name: '',
    icon: '',
    version: '',
}

export const useGlobalStore = create<IGlobalStore>()(
    persist(
        loggerStore<IGlobalStore>(
            (set) => ({
                ...INITIAL_STATE,
                clear: () => set(() => INITIAL_STATE),
                setIsSidebarOpen: (state: boolean) =>
                    set(() => ({ isShowSidebar: state })),
            }),
            storageName
        ),
        {
            name: storageName, // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
    )
)
