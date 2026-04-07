import { WrapperResponse, WrapperResponsePagination } from '@/types/common'
import {
    ICreateResourceRequest,
    ICreateResourceResponse,
} from '@/types/repositories/resource/createResouce'
import {
    IDeleteResourceRequest,
    IDeleteResourceResponse,
} from '@/types/repositories/resource/deleteResource'
import {
    IGetResourceRequest,
    IGetResourceResponse,
} from '@/types/repositories/resource/getResource'
import {
    IGetListResourceData,
    IGetListResourceRequest,
    IGetListResourceResponse,
} from '@/types/repositories/resource/listResource'
import {
    IPatchResourceRequest,
    IPatchResourceResponse,
} from '@/types/repositories/resource/patchResource'

import { ResourceRepository } from '../resourceRepository'

export class ResourceRepositoryImplMock implements ResourceRepository {
    patchResource(
        _req: IPatchResourceRequest
    ): Promise<WrapperResponse<IPatchResourceResponse>> {
        throw new Error('Method not implemented.')
    }
    deleteResource(
        _req: IDeleteResourceRequest
    ): Promise<WrapperResponse<IDeleteResourceResponse>> {
        return new Promise((resolve) => {
            resolve({
                status: 200,
                code: 'E1R0100',
                message: 'Success',
                data: {
                    id: '1',
                },
            })
        })
    }
    createResource(
        _req: ICreateResourceRequest
    ): Promise<WrapperResponse<ICreateResourceResponse>> {
        return new Promise((resolve) => {
            resolve({
                status: 200,
                code: 'E1R0100',
                message: 'Success',
                data: {
                    id: '1',
                },
            })
        })
    }

    getResourceDetail(
        _req: IGetResourceRequest
    ): Promise<WrapperResponse<IGetResourceResponse>> {
        return new Promise((resolve) => {
            const data: IGetResourceResponse = {
                id: 1,
                domain: 'www.test.com',
                github: '/test/repo',
                title: 'title',
                description: 'description',
                content: 'xxxxxx',
                image: '',
                status: 'PUBLISHED',
                published_at: '2024-12-20',
                created_at: '2024-12-20',
                metaDescription: {
                    title: 'meta_title',
                    description: 'meta_description',
                    isFollow: false,
                    isIndex: false,
                    canonical: '',
                },
            }
            resolve({
                status: 200,
                code: 'E1R0100',
                message: 'Success',
                data: data,
            })
        })
    }

    getResources(
        _req: IGetListResourceRequest
    ): Promise<WrapperResponsePagination<IGetListResourceResponse>> {
        return new Promise((resolve) => {
            const data: IGetListResourceData[] = [
                {
                    id: '1',
                    domain: 'www.test.com',
                    github: '/test/repo',
                    title: 'title',
                    description: 'description',
                    content: 'xxxxxx',
                    image: '',
                    status: 'PUBLISHED',
                    published_at: '2024-12-20',
                    created_at: '2024-12-20',
                    metaDescription: {
                        title: 'meta_title',
                        description: 'meta_description',
                        isFollow: false,
                        isIndex: false,
                        canonical: '',
                    },
                },
                {
                    id: '2',
                    domain: 'www.test.com',
                    github: '/test/repo',
                    title: 'title',
                    description: 'description',
                    content: 'xxxxxx',
                    image: '',
                    status: 'CREATED',
                    published_at: '2024-12-20',
                    created_at: '2024-12-20',
                    metaDescription: {
                        title: 'meta_title',
                        description: 'meta_description',
                        isFollow: false,
                        isIndex: false,
                        canonical: '',
                    },
                },
                {
                    id: '3',
                    domain: 'www.test.com',
                    github: '/test/repo',
                    title: 'title',
                    description: 'description',
                    content: 'xxxxxx',
                    image: '',
                    status: 'PUBLISHED',
                    published_at: '2024-12-20',
                    created_at: '2024-12-20',
                    metaDescription: {
                        title: 'meta_title',
                        description: 'meta_description',
                        isFollow: false,
                        isIndex: false,
                        canonical: '',
                    },
                },
            ]
            resolve({
                status: 200,
                code: 'E1R0100',
                message: 'Success',
                data: {
                    rows: data,
                    total_count: 1,
                },
            })
        })
    }
}
