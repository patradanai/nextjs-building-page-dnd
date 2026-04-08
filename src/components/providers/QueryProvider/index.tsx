'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { NextPage } from 'next'

interface Props {
    children: React.ReactNode
}

export const QueryProvider: NextPage<Props> = (props) => {
    const queryClient = new QueryClient()

    return (
        <>
            <QueryClientProvider client={queryClient}>
                {/* <ReactQueryDevtools initialIsOpen={false} /> */}

                {props.children}
            </QueryClientProvider>
        </>
    )
}
