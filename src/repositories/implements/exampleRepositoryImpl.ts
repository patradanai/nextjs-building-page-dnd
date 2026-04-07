import { BaseApiService } from '../../utils/base/baseHttp'
import { ExampleRepository } from '../exampleRepository'

export class ExampleRepositoryImpl
    extends BaseApiService
    implements ExampleRepository
{
    constructor() {
        super({
            baseURL: 'https://jsonplaceholder.typicode.com',
        })
    }

    async getExample<T>(): Promise<T> {
        return this.get<T>('/posts')
    }
}
