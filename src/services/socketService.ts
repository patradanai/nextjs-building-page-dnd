import { SocketRepository } from '@/repositories/socketRepository'

export abstract class SocketService {
    abstract socket(): SocketRepository
}
