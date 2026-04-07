export abstract class ImageService {
    abstract updateImage(name: string, base64Image: string): Promise<string>
}
