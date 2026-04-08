'use client'

import { useContext, useEffect, useState } from 'react'

import { SocketContext } from '@/contexts/socketContext'
import { SocketServiceImpl } from '@/services/implements/socketServiceImpl'
import { SocketService } from '@/services/socketService'

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
    const [socketService] = useState<SocketService>(
        () => new SocketServiceImpl()
    )
    const [isConnected] = useState(() => {
        return socketService.socket().isConnectionAvailable()
    })

    useEffect(() => {
        const { disconnect } = socketService.socket()

        return () => {
            disconnect()
        }
    }, [socketService])

    return (
        <SocketContext.Provider value={{ socketService, isConnected }}>
            {children}
        </SocketContext.Provider>
    )
}

export const useSocket = () => {
    const context = useContext(SocketContext)
    if (context === undefined)
        throw new Error(
            'useSocket context is used outside the SocketContext Provider'
        )
    return context
}
