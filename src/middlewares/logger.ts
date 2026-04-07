import { NextFetchEvent, NextRequest } from 'next/server'

import { MiddlewareFactory } from './stackMiddleware'

export const loggerMiddlware: MiddlewareFactory = (next) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        // eslint-disable-next-line no-console
        console.log(
            `Received ${request.method} request to ${
                request.url
            } at ${new Date()}`
        )
        return next(request, _next)
    }
}
