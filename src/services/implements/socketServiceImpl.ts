import { reposities } from '@/repositories'
import { SocketRepository } from '@/repositories/socketRepository'

import { SocketService } from '../socketService'

export class SocketServiceImpl implements SocketService {
    private socketRepository: SocketRepository

    constructor() {
        this.socketRepository = reposities.socketRepository
        this.socketRepository.initializeEvent()
    }

    socket(): SocketRepository {
        return this.socketRepository
    }
}
