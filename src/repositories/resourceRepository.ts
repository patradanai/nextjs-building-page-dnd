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

export abstract class ResourceRepository {
    abstract getResourceDetail(
        req: IGetResourceRequest
    ): Promise<WrapperResponse<IGetResourceResponse>>

    abstract getResources(
        req: IGetListResourceRequest
    ): Promise<WrapperResponsePagination<IGetListResourceResponse>>

    abstract patchResource(
        req: IPatchResourceRequest
    ): Promise<WrapperResponse<IPatchResourceResponse>>

    abstract deleteResource(
        req: IDeleteResourceRequest
    ): Promise<WrapperResponse<IDeleteResourceResponse>>

    abstract createResource(
        req: ICreateResourceRequest
    ): Promise<WrapperResponse<ICreateResourceResponse>>
}
