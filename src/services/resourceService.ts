import {
    IGetResourceInput,
    IGetResourceOutput,
} from '@/types/services/resource/getResource'
import {
    IGetListResourceInput,
    IGetListResourceOutput,
} from '@/types/services/resource/resource'

export abstract class IResourceService {
    abstract getResourceList(
        data: IGetListResourceInput
    ): Promise<IGetListResourceOutput>

    abstract getResourceDetail(
        input: IGetResourceInput
    ): Promise<IGetResourceOutput>
}
