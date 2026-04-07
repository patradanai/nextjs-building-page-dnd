/* eslint-disable */
import colors from 'tailwindcss/colors'
import typography from '@tailwindcss/typography'

function withOpacityValue(variable) {
    return ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${variable}), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
            return `rgba(var(${variable}), var(${opacityVariable}, 1))`
        }
        return `rgb(var(${variable}))`
    }
}

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
        './src/libs/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '1rem',
                md: '4rem',
                '2xl': '18rem',
            },
        },
        extend: {
            animation: {
                scale: 'scale 1s linear infinite',
                bounceLower: 'bounceLower 1s infinite',
                flicker: 'flicker 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            fontFamily: {
                sarabun: ['var(--font-sarabun)'],
                kanit: ['var(--font-kanit)'],
            },
            colors: {
                ...colors,
                primary: withOpacityValue('--tw-color-primary'),
                secondary: withOpacityValue('--tw-color-secondary'),
                success: '#206521',
                warning: '#FBBF24',
                error: '#EF4444',
            },
        },
    },
    plugins: [typography],
}
