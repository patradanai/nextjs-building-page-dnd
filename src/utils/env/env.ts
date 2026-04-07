import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
    /*
     * Specify what prefix the client-side variables must have.
     * This is enforced both on type-level and at runtime.
     */
    client: {
        NEXT_PUBLIC_APP_VERSION: z.string(),
        NEXT_PUBLIC_LOGGER: z.string().default('string'),
        NEXT_PUBLIC_API_URL: z.string().url(),
        NEXT_PUBLIC_API_TIMEOUT: z.string(),
        NEXT_PUBLIC_ENVIRONMENT: z.string().default('development'),
        NEXT_PUBLIC_NEXTAUTH_SECRET: z.string(),
        NEXT_PUBLIC_RESOURCE_ID: z.string(),
        NEXT_PUBLIC_API_TOKEN: z.string(),
        NEXT_PUBLIC_DOMAIN_URL: z.string(),
    },
    /**
     * What object holds the environment variables at runtime.
     * Often `process.env` or `import.meta.env`
     */
    experimental__runtimeEnv: {
        NEXT_PUBLIC_APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION,
        NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
        NEXT_PUBLIC_LOGGER: process.env.NEXT_PUBLIC_LOGGER,
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_API_TIMEOUT: process.env.NEXT_PUBLIC_API_TIMEOUT,
        NEXT_PUBLIC_NEXTAUTH_SECRET: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
        NEXT_PUBLIC_RESOURCE_ID: process.env.NEXT_PUBLIC_RESOURCE_ID,
        NEXT_PUBLIC_API_TOKEN: process.env.NEXT_PUBLIC_API_TOKEN,
        NEXT_PUBLIC_DOMAIN_URL: process.env.NEXT_PUBLIC_DOMAIN_URL,
    },
})
