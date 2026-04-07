'use client'

import { useContext, useEffect, useState } from 'react'

import { SocketContext } from '@/contexts/socketContext'
import { SocketServiceImpl } from '@/services/implements/socketServiceImpl'
import { SocketService } from '@/services/socketService'

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
    const [socketService, setSocketService] = useState<SocketService | null>(
        null
    )
    const [isConnected, setIsConnected] = useState(false)

    useEffect(() => {
        const socketService = new SocketServiceImpl()
        const { disconnect, isConnectionAvailable } = socketService.socket()

        setSocketService(socketService)
        setIsConnected(isConnectionAvailable)

        return () => {
            disconnect()
        }
    }, [])

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
