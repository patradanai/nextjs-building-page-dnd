import { AuthRepositoryImplMock } from './__mock__/authRepositoryMock'
import { ExampleRepositoryImplMock } from './__mock__/exmapleRepositoryMock'
import { ImageRepositoryImplMock } from './__mock__/imageRepositoryMock'
import { ResourceRepositoryImplMock } from './__mock__/resourceRepositoryMock'
import { AuthRepository } from './authRepository'
import { ExampleRepository } from './exampleRepository'
import { ImageRepository } from './imageRepository'
import { AuthRepositoryImpl } from './implements/authRepositoryImpl'
import { ExampleRepositoryImpl } from './implements/exampleRepositoryImpl'
import { ImageRepositoryImpl } from './implements/imageRespositoryImpl'
import { ResourceRepositoryImpl } from './implements/resourceRepositoryImpl'
import { ResourceRepository } from './resourceRepository'

/**
 * Repositories
 *
 * Support Mock Response for Development Mode or Stub Mode
 */

// TODO: Need to initial SOcket when call

interface IReposities {
    exampleRepository: ExampleRepository
    authRepository: AuthRepository
    resourcesRepository: ResourceRepository
    imageRepository: ImageRepository
}

class BaseRepostiory {
    exampleRepository: ExampleRepository
    authRepository: AuthRepository
    resourcesRepository: ResourceRepository
    imageRepository: ImageRepository

    constructor(
        options: IReposities,
        // Override can have enironment specific override
        override: {
            [key: string]: IReposities
        }
    ) {
        // 1. Declear Repositories
        this.exampleRepository = options.exampleRepository
        this.authRepository = options.authRepository
        this.resourcesRepository = options.resourcesRepository
        this.imageRepository = options.imageRepository

        const envonment = process.env.APP_ENV ?? 'development'

        const overrideEnvronment = override[envonment]
        if (overrideEnvronment) {
            const overrideReposities = overrideEnvronment

            // 2. Declear Override Repositories
            this.exampleRepository = overrideReposities.exampleRepository
            this.authRepository = overrideReposities.authRepository
            this.resourcesRepository = overrideReposities.resourcesRepository
            this.imageRepository = overrideReposities.imageRepository
        }
    }
}

export const reposities = new BaseRepostiory(
    {
        exampleRepository: new ExampleRepositoryImpl(),
        authRepository: new AuthRepositoryImpl(),
        resourcesRepository: new ResourceRepositoryImpl(),
        imageRepository: new ImageRepositoryImpl(),
    },
    {
        stub: {
            exampleRepository: new ExampleRepositoryImplMock(),
            authRepository: new AuthRepositoryImplMock(),
            resourcesRepository: new ResourceRepositoryImplMock(),
            imageRepository: new ImageRepositoryImplMock(),
        },
        development: {
            exampleRepository: new ExampleRepositoryImplMock(),
            authRepository: new AuthRepositoryImplMock(),
            resourcesRepository: new ResourceRepositoryImplMock(),
            imageRepository: new ImageRepositoryImplMock(),
        },
    }
)
