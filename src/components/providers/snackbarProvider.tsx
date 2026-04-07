'use client'

import { useContext, useState } from 'react'

import { NextPage } from 'next'

import { Snackbar } from '@/components/ui/Snackbar'
import { IMessage, SnackbarContext } from '@/contexts/snackbarContext'

interface Props {
    children: React.ReactNode
}

const SnackBarProvider: NextPage<Props> = (props) => {
    const { children } = props
    const [alerts, setAlerts] = useState<IMessage[]>([])

    const enqueueSnackbar = (message: IMessage) => {
        setAlerts((val: IMessage[]) => [
            ...val,
            { ...message, id: Date.now().toString() },
        ])
    }

    return (
        <SnackbarContext.Provider value={{ enqueueSnackbar }} {...props}>
            {children}
            {alerts?.map((val) => (
                <Snackbar
                    key={val.id}
                    type={val.type}
                    message={val.message}
                    isOpen
                />
            ))}
        </SnackbarContext.Provider>
    )
}

const useSnackBar = () => {
    const context = useContext(SnackbarContext)
    if (context === undefined)
        throw new Error(
            'useSnackBar context is used outside the SnackBarProvider Provider'
        )
    return context
}

export { SnackBarProvider, useSnackBar }
