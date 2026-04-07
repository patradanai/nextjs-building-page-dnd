import '@/styles/globals.css'
import '@/configs/fontawesome.config'

import React from 'react'

import DefaultLayout from '@/components/layouts/DefaultLayout/DefaultLayout'
import { QueryProvider } from '@/components/providers/queryProvider'

export default async function RootLayout(props: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    const { children } = props

    return (
        <QueryProvider>
            <DefaultLayout>{children}</DefaultLayout>
        </QueryProvider>
    )
}
