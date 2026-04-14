import '@/styles/globals.css'
import '@/lib/fontawesome'

import React from 'react'

import ErrorModal from '@/components/ErrorModal'

import type { Viewport } from 'next'

export const viewport: Viewport = {
    initialScale: 1,
    width: 'device-width',
    maximumScale: 3,
    minimumScale: 1,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>
                {children}
                <ErrorModal />
            </body>
        </html>
    )
}
