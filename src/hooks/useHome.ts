import { useQuery } from '@apollo/client'

import GET_RESOURCE from '@/graphql/queries/resource'
import { IResourceResponse } from '@/types/resource'
import { logger } from '@/utils/logger'

export const useHomeClient = (id: string) => {
    return useQuery<IResourceResponse>(GET_RESOURCE, {
        variables: { id: id },
        fetchPolicy: 'network-only',
        onError: (error) => {
            logger(id, 'Resource NEXT_PUBLIC_RESOURCE_ID')
            logger(error.message, 'Error Fetch Resources')
        },
    })
}
