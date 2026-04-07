import { i18nMiddleware } from './middlewares/i18n'
import { loggerMiddlware } from './middlewares/logger'
import { stackMiddlewares } from './middlewares/stackMiddleware'

const middlewares = [loggerMiddlware, i18nMiddleware]

export default stackMiddlewares(middlewares)

export const config = {
    // Match all pathnames except for
    // - paths starting with `/api`, `/_next` or `/_vercel`
    // - files with extensions like `favicon.ico`
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
