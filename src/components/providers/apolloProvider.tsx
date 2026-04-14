'use client'
import { ApolloNextAppProvider } from '@apollo/client-integration-nextjs'
import { NextPage } from 'next'

import { makeClient } from '@/lib/apollo/apolloClient'

interface Props {
    children: React.ReactNode
}

export const ApolloProvider: NextPage<Props> = ({ children }) => {
    return (
        <>
            <ApolloNextAppProvider makeClient={makeClient}>
                {children}
            </ApolloNextAppProvider>
        </>
    )
}
