import { reposities } from '@/repositories'

import { ImageService } from '../imageService'

export class ImageServiceImpl implements ImageService {
    constructor() {}

    async updateImage(name: string, base64Image: string): Promise<string> {
        try {
            const res = await reposities.imageRepository.updateImage(
                name,
                base64Image
            )
            return res
        } catch (error: any) {
            throw new Error(error)
        }
    }
}
