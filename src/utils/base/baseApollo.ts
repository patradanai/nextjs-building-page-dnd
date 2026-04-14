import { ApolloClient, MutationOptions, QueryOptions } from '@apollo/client'

import getClient from '@/lib/apollo/apolloServer'

abstract class HTTPApolloServer {
    protected instance: ApolloClient | undefined

    createInstance(): ApolloClient {
        this.instance = getClient()

        return this.instance
    }
}

export abstract class BaseApolloServer extends HTTPApolloServer {
    protected client: ApolloClient

    constructor() {
        super()
        this.client = this.createInstance()
    }

    query<T>(query: any, options: Omit<QueryOptions, 'query'>): Promise<T> {
        return this.client.query({
            query: query,
            ...options,
        }) as Promise<T>
    }

    mutate<T>(
        mutation: any,
        options: Omit<MutationOptions, 'mutation'>
    ): Promise<T> {
        return this.client.mutate({
            mutation: mutation,
            ...options,
        }) as Promise<T>
    }
}
