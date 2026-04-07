import { ApolloClient, MutationOptions, QueryOptions } from '@apollo/client'

import getClient from '@/configs/apolloServer.config'

abstract class HTTPApolloServer {
    protected instance: ApolloClient<any> | undefined

    createInstance(): ApolloClient<any> {
        this.instance = getClient()

        return this.instance
    }
}

export abstract class BaseApolloServer extends HTTPApolloServer {
    protected client: ApolloClient<any>

    constructor() {
        super()
        this.client = this.createInstance()
    }

    query<T>(query: any, options: Omit<QueryOptions, 'query'>): Promise<T> {
        return this.client.query<T>({
            query: query,
            ...options,
        }) as Promise<T>
    }

    mutate<T>(
        mutation: any,
        options: Omit<MutationOptions, 'mutation'>
    ): Promise<T> {
        return this.client.mutate<T>({
            mutation: mutation,
            ...options,
        }) as Promise<T>
    }
}
