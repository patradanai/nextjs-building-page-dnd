import { type StateCreator, type StoreMutatorIdentifier } from 'zustand'

import { env } from '@/utils/env'

type Logger = <
    T,
    Mps extends Array<[StoreMutatorIdentifier, unknown]> = [],
    Mcs extends Array<[StoreMutatorIdentifier, unknown]> = [],
>(
    f: StateCreator<T, Mps, Mcs>,
    name?: string
) => StateCreator<T, Mps, Mcs>

type LoggerImpl = <T>(
    f: StateCreator<T, [], []>,
    name?: string
) => StateCreator<T, [], []>

const loggerImpl: LoggerImpl = (f, name) => (set, get, store) => {
    const loggedSet: typeof set = (...a) => {
        set(...a)
        if (env.NEXT_PUBLIC_ENVIRONMENT === 'development') {
            // eslint-disable-next-line no-console
            console.log(...(name ? [`${name}:`] : []), get())
        }
    }
    store.setState = loggedSet

    return f(loggedSet, get, store)
}

export const loggerStore = loggerImpl as Logger
