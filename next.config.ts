import path from 'node:path'

import createNextIntlPlugin from 'next-intl/plugin'

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    typedRoutes: true,
    turbopack: {
        resolveAlias: {
            '@': path.resolve(process.cwd(), 'src'),
        },
    },
    allowedDevOrigins: ['192.168.1.47'],
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
