export abstract class SocketRepository {
    abstract subscribeEvent(event: string, callback: (data: any) => void): void
    abstract unsubscribeEvent(
        event: string,
        callback?: (data: any) => void
    ): void
    abstract emitEvent(event: string, data: any): void
    abstract disconnect(): void
    abstract isConnectionAvailable(): boolean
    abstract initializeEvent(): void
}
