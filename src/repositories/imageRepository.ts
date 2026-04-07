export abstract class ImageRepository {
    abstract updateImage(name: string, base64Image: string): Promise<string>
}
