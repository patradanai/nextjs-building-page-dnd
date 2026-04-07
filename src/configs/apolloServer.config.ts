import { HttpLink, InMemoryCache, ApolloClient } from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'

import { env } from '@/utils/env'

export const { getClient } = registerApolloClient(() => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: env.NEXT_PUBLIC_API_URL,
        }),
        headers: {
            authorization: `Bearer ${env.NEXT_PUBLIC_API_TOKEN}`,
        },
        queryDeduplication: false,
        defaultOptions: {
            watchQuery: {
                fetchPolicy: 'cache-and-network',
            },
            query: {
                fetchPolicy: 'cache-first',
            },
        },
    })
})

export default getClient
