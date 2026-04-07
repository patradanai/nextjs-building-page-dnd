import { ImageRepository } from '../imageRepository'

export class ImageRepositoryImplMock implements ImageRepository {
    updateImage(name: string, base64Image: string): Promise<string> {
        return Promise.resolve('1231312312')
    }
}
