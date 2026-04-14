import React from 'react'

import localFont from 'next/font/local'
import { notFound } from 'next/navigation'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { SnackBarProvider } from '@/components/providers/SnackBarProvider'
import { routing } from '@/i18n/routing'

const sarabun = localFont({
    src: [
        {
            path: '../../../public/fonts/Sarabun/Sarabun-Thin.ttf',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/Sarabun/Sarabun-ExtraLight.ttf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/Sarabun/Sarabun-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/Sarabun/Sarabun-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/Sarabun/Sarabun-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/Sarabun/Sarabun-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/Sarabun/Sarabun-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/Sarabun/Sarabun-ExtraBold.ttf',
            weight: '800',
            style: 'normal',
        },
    ],
    variable: '--font-sarabun',
    display: 'swap',
})

const kanit = localFont({
    src: [
        {
            path: '../../../public/fonts/Kanit/Kanit-Thin.ttf',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/Kanit/Kanit-ExtraLight.ttf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/Kanit/Kanit-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/Kanit/Kanit-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/Kanit/Kanit-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/Kanit/Kanit-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/Kanit/Kanit-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/Kanit/Kanit-ExtraBold.ttf',
            weight: '800',
            style: 'normal',
        },
    ],
    variable: '--font-kanit',
    display: 'swap',
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
