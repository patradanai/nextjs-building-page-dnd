import { ApolloLink, HttpLink } from '@apollo/client'
import {
    NextSSRApolloClient,
    NextSSRInMemoryCache,
    SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr'

import { env } from '@/utils/env'

const makeClient = () => {
    const httpLink = new HttpLink({
        uri: env.NEXT_PUBLIC_API_URL,
    })

    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
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
        headers: {
            authorization: `Bearer ${env.NEXT_PUBLIC_API_TOKEN}`,
        },
    })
}

export { makeClient }
