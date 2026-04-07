import { createContext } from 'react'

import { SocketService } from '@/services/socketService'

type SocketContextType = {
    socketService: SocketService | null
    isConnected: boolean
}

export const SocketContext = createContext<SocketContextType>({
    socketService: null,
    isConnected: false,
})
