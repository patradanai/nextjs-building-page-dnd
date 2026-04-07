import https from 'https'

import axios from 'axios'

import { env } from '@/utils/env'

const cancelTokenSource = axios.CancelToken.source()

const instance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false,
    }),
    // baseURL: env.NEXT_PUBLIC_API_URL,
    timeout: parseFloat(env.NEXT_PUBLIC_API_TIMEOUT),
    cancelToken: cancelTokenSource.token,
})

export { instance, cancelTokenSource }
