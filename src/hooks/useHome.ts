import { useQuery } from '@tanstack/react-query'

import { resourceService } from '@/services/implements'

interface HomeResourceData {
    resource: {
        socialFacebook: string
        socialTwitter: string
        socialLine: string
        socialYoutube: string
    }
}

export const useHomeClient = (id: string) => {
    return useQuery<HomeResourceData>({
        queryKey: ['home-resource', id],
        queryFn: async () => {
            await resourceService.getResourceDetail({ id })

            return {
                resource: {
                    socialFacebook: '',
                    socialTwitter: '',
                    socialLine: '',
                    socialYoutube: '',
                },
            }
        },
        staleTime: 60 * 1000,
        throwOnError: false,
    })
}
