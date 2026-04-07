import { BaseApiService } from '@/utils/base/baseHttp'

import { ImageRepository } from '../imageRepository'

export class ImageRepositoryImpl
    extends BaseApiService
    implements ImageRepository
{
    constructor() {
        super({
            baseURL: 'https://jsonplaceholder.typicode.com',
        })
    }

    updateImage(name: string, base64Image: string): Promise<string> {
        throw new Error('Method not implemented.')
    }
}
