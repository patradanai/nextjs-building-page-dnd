import { createContext } from 'react'

export interface ISnackbarContext {
    enqueueSnackbar: (message: IMessage) => void
}

export interface IMessage {
    id?: string
    message: string
    type: 'success' | 'error' | 'warning' | 'info'
}

export const SnackbarContext = createContext<ISnackbarContext | null>(null)
