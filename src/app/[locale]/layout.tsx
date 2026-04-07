import React from 'react'

import { Sarabun, Kanit } from 'next/font/google'
import { notFound } from 'next/navigation'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { SnackBarProvider } from '@/components/providers/snackbarProvider'
import { routing } from '@/i18n/routing'

const sarabun = Sarabun({
    subsets: ['thai'],
    variable: '--font-sarabun',
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

const kanit = Kanit({
    subsets: ['thai'],
    variable: '--font-kanit',
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export default async function RootLayout(props: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    const { locale } = await props.params
    if (!routing.locales.includes(locale as any)) {
        notFound()
    }

    const { children } = props

    const messages = await getMessages()
    return (
        <NextIntlClientProvider messages={messages}>
            <div className={`${sarabun.variable} ${kanit.variable}`}>
                <SnackBarProvider>{children}</SnackBarProvider>
            </div>
        </NextIntlClientProvider>
    )
}
