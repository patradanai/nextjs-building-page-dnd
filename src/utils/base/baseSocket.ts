import { io, Socket } from 'socket.io-client'

import { logger } from '../logger'

// socket Connection
class SocketBase {
    private socket: Socket | null = null
    private url: string

    constructor(url: string) {
        this.url = url
    }

    public initialize(): this {
        if (!this.socket) {
            this.socket = io(this.url)
            this.socket.on('connect', () => {
                logger('Socket connection established')
            })

            this.socket.on('disconnect', () => {
                logger('Socket connection closed')
            })

            this.socket.on('connect_error', (error) => {
                logger('Socket connection error:', error)
            })
        }

        return this
    }

    private ensureInitialized() {
        if (!this.socket) {
            throw new Error(
                'Socket is not initialized. Call initialize() first.'
            )
        }
    }

    public on(event: string, callback: (data: any) => void) {
        this.ensureInitialized()
        this.socket!.on(event, callback)
    }

    public off(event: string, callback?: (data: any) => void) {
        this.ensureInitialized()
        this.socket!.off(event, callback)
    }

    public emit(event: string, data: any) {
        this.ensureInitialized()
        this.socket!.emit(event, data)
    }

    public disconnect() {
        this.ensureInitialized()
        this.socket!.disconnect()
    }

    public isConnected(): boolean {
        this.ensureInitialized()
        return this.socket!.connected
    }
}

export default SocketBase
