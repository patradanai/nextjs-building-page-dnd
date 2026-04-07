import { useQuery } from '@tanstack/react-query'

import { resourceService } from '@/services/implements'
import { IPaginationRequest } from '@/types/pagination'

export const useResources = (pagination: IPaginationRequest) => {
    return useQuery({
        queryKey: ['resource', pagination],
        queryFn: () => {
            return resourceService.getResourceList({
                criterias: pagination.criterias,
                limit: pagination.limit,
                offset: pagination.offset,
                sort_by: pagination.sort_by,
            })
        },
        staleTime: 60 * 1000,
    })
}

export const useResource = (id: string) => {
    return useQuery({
        queryKey: ['resource', id],
        queryFn: () => {
            return resourceService.getResourceDetail({ id })
        },
        staleTime: 60 * 1000,
    })
}
