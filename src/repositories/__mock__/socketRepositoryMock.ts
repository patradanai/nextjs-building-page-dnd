import { SocketRepository } from '../socketRepository'

export class SocketRepositoryMock implements SocketRepository {
    isConnectionAvailable(): boolean {
        throw new Error('Method not implemented.')
    }
    initializeEvent(): void {
        throw new Error('Method not implemented.')
    }
    subscribeEvent(_event: string, _callback: (data: any) => void): void {
        throw new Error('Method not implemented.')
    }
    unsubscribeEvent(_event: string, _callback?: (data: any) => void): void {
        throw new Error('Method not implemented.')
    }
    emitEvent(_event: string, _data: any): void {
        throw new Error('Method not implemented.')
    }
    disconnect(): void {
        throw new Error('Method not implemented.')
    }
}
