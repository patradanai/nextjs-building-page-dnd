// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

import React from 'react'

import { jest } from '@jest/globals'

jest.mock('@/utils/env', () => ({
    env: {
        NEXT_PUBLIC_APP_VERSION: 'test',
        NEXT_PUBLIC_LOGGER: 'string',
        NEXT_PUBLIC_API_URL: 'http://localhost:3000',
        NEXT_PUBLIC_API_TIMEOUT: '3000',
        NEXT_PUBLIC_ENVIRONMENT: 'test',
        NEXT_PUBLIC_NEXTAUTH_SECRET: 'test-secret',
        NEXT_PUBLIC_RESOURCE_ID: 'resource-id',
        NEXT_PUBLIC_API_TOKEN: 'test-token',
        NEXT_PUBLIC_DOMAIN_URL: 'http://localhost:3000',
    },
}))

jest.mock('@/i18n/navigation', () => ({
    Link: ({ href, children, ...props }) =>
        React.createElement('a', { href, ...props }, children),
    redirect: jest.fn(),
    usePathname: jest.fn(),
    useRouter: jest.fn(),
    getPathname: jest.fn(),
}))

jest.mock(
    'react-slick',
    () => {
        const MockSlider = ({ children }) =>
            React.createElement(
                'div',
                { 'data-testid': 'spinner-id' },
                children
            )

        return {
            __esModule: true,
            default: MockSlider,
        }
    },
    { virtual: true }
)
