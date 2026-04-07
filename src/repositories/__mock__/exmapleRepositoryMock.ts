import { ExampleRepository } from '../exampleRepository'

export class ExampleRepositoryImplMock implements ExampleRepository {
    getExample<T>(): Promise<T> {
        return new Promise((resolve) => {
            resolve({
                data: [
                    {
                        userId: 1,
                        id: 1,
                        title: 'title',
                        body: 'body',
                    },
                ],
            } as unknown as T)
        })
    }
}
