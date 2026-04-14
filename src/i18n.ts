import { notFound } from 'next/navigation'

import { getRequestConfig } from 'next-intl/server'

import { locales, timeZone } from './configs/i18n.config'

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locale || !locales.includes(locale as any)) notFound()

    const validLocale = locale

    return {
        locale: validLocale,
        messages: (await import(`./dictionaries/${validLocale}.json`)).default,
        timeZone: timeZone,
    }
})
