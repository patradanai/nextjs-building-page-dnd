import createMiddleware from 'next-intl/middleware'

import { routing } from '@/i18n/routing'

import { MiddlewareFactory } from './stackMiddleware'

export const i18nMiddleware: MiddlewareFactory = () => {
    const i18nMiddleware = createMiddleware(routing)

    return i18nMiddleware
}
