import SocketBase from '@/utils/base/baseSocket'

import { SocketRepository } from '../socketRepository'

export class SocketRepositoryImpl
    extends SocketBase
    implements SocketRepository
{
    constructor() {
        super('http://localhost:3000')
    }

    /**
     * Initialize the socket connection.
     */
    initializeEvent(): void {
        super.initialize()
    }

    /**
     * Subscribe to a socket event.
     * @param event - The event name.
     * @param callback - The callback function to handle the event data.
     */
    subscribeEvent(event: string, callback: (data: any) => void): void {
        this.on(event, callback)
    }

    /**
     * Unsubscribe from a socket event.
     * @param event - The event name.
     * @param callback - The callback function to remove.
     */
    unsubscribeEvent(event: string, callback?: (data: any) => void): void {
        this.off(event, callback)
    }

    /**
     * Emit a socket event.
     * @param event - The event name.
     * @param data - The data to send with the event.
     */
    emitEvent(event: string, data: any): void {
        this.emit(event, data)
    }

    /**
     * Disconnect the socket.
     */
    disconnect(): void {
        super.disconnect()
    }

    /**
     * Check if the socket connection is available.
     * @returns True if connected, otherwise false.
     */
    isConnectionAvailable(): boolean {
        return this.isConnected()
    }
}
