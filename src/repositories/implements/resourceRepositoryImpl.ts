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
    IGetListResourceRequest,
    IGetListResourceResponse,
} from '@/types/repositories/resource/listResource'
import {
    IPatchResourceRequest,
    IPatchResourceResponse,
} from '@/types/repositories/resource/patchResource'

import { BaseApiService } from '../../utils/base/baseHttp'
import { ResourceRepository } from '../resourceRepository'

export class ResourceRepositoryImpl
    extends BaseApiService
    implements ResourceRepository
{
    constructor() {
        super({
            baseURL: 'https://jsonplaceholder.typicode.com',
        })
    }
    deleteResource(
        req: IDeleteResourceRequest
    ): Promise<WrapperResponse<IDeleteResourceResponse>> {
        throw new Error('Method not implemented.')
    }
    createResource(
        req: ICreateResourceRequest
    ): Promise<WrapperResponse<ICreateResourceResponse>> {
        throw new Error('Method not implemented.')
    }
    patchResource(
        req: IPatchResourceRequest
    ): Promise<WrapperResponse<IPatchResourceResponse>> {
        throw new Error('Method not implemented.')
    }
    getResourceDetail(
        req: IGetResourceRequest
    ): Promise<WrapperResponse<IGetResourceResponse>> {
        throw new Error('Method not implemented.')
    }

    getResources(
        req: IGetListResourceRequest
    ): Promise<WrapperResponsePagination<IGetListResourceResponse>> {
        throw new Error('Method not implemented.')
    }
}
