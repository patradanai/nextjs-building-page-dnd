import { HttpException } from '@/exceptions/exceptionHttp'
import { reposities } from '@/repositories'
import {
    IGetResourceInput,
    IGetResourceOutput,
} from '@/types/services/resource/getResource'
import {
    IGetListResourceDataOutput,
    IGetListResourceInput,
    IGetListResourceOutput,
} from '@/types/services/resource/resource'

import { IResourceService } from '../resourceService'

export class ResourceServiceImpl implements IResourceService {
    constructor() {}
    async getResourceDetail(
        input: IGetResourceInput
    ): Promise<IGetResourceOutput> {
        try {
            const { data } =
                await reposities.resourcesRepository.getResourceDetail({
                    id: input.id,
                })

            return {
                id: data.id,
                domain: data.domain,
                github: data.github,
                title: data.title,
                description: data.description,
                content: data.content,
                image: data.image,
                status: data.status,
                published_at: data.published_at,
                created_at: data.created_at,
                metaDescription: {
                    title: data.metaDescription.title,
                    description: data.metaDescription.description,
                    isFollow: data.metaDescription.isFollow,
                    isIndex: data.metaDescription.isIndex,
                    canonical: data.metaDescription.canonical,
                },
            }
        } catch (error: any) {
            throw new HttpException(error)
        }
    }

    async getResourceList(
        req: IGetListResourceInput
    ): Promise<IGetListResourceOutput> {
        try {
            const { data } = await reposities.resourcesRepository.getResources({
                ...req,
            })

            const mapOutput: IGetListResourceDataOutput[] = data.rows.map(
                (item) => {
                    return {
                        id: item.id,
                        domain: item.domain,
                        github: item.github,
                        title: item.title,
                        description: item.description,
                        content: item.content,
                        image: item.image,
                        status: item.status,
                        published_at: item.published_at,
                        created_at: item.created_at,
                        metaDescription: {
                            title: item.metaDescription.title,
                            description: item.metaDescription.description,
                            isFollow: item.metaDescription.isFollow,
                            isIndex: item.metaDescription.isIndex,
                            canonical: item.metaDescription.canonical,
                        },
                    }
                }
            )

            return {
                rows: mapOutput,
                total_count: data.total_count,
            }
        } catch (error: any) {
            throw new HttpException(error)
        }
    }
}
