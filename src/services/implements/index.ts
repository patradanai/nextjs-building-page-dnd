import { AuthServiceImpl } from './authServiceImpl'
import { ResourceServiceImpl } from './resourceServiceImpl'
// import { SocketServiceImpl } from './socketServiceImpl'

export const authService = new AuthServiceImpl()
export const resourceService = new ResourceServiceImpl()
