import { ApolloLink, HttpLink } from '@apollo/client'
import {
    ApolloClient,
    InMemoryCache,
    SSRMultipartLink,
} from '@apollo/client-integration-nextjs'

import { env } from '@/utils/env'

const makeClient = () => {
    const httpLink = new HttpLink({
        uri: env.NEXT_PUBLIC_API_URL,
        headers: {
            authorization: `Bearer ${env.NEXT_PUBLIC_API_TOKEN}`,
        },
    })

    return new ApolloClient({
        cache: new InMemoryCache(),
        link:
            typeof window === 'undefined'
                ? ApolloLink.from([
                      // in a SSR environment, if you use multipart features like
                      // @defer, you need to decide how to handle these.
                      // This strips all interfaces with a `@defer` directive from your queries.
                      new SSRMultipartLink({
                          stripDefer: true,
                      }),
                      httpLink,
                  ])
                : httpLink,
    })
}

export { makeClient }
