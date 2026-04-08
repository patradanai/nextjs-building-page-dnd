/* eslint-disable import/no-anonymous-default-export */
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import next from 'eslint-config-next'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'
import checkFile from 'eslint-plugin-check-file'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
})

export default [
    ...nextTypescript,
    {
        ignores: ['**/node_modules', '**/dist', '**/.next'],
    },
    ...next,
    ...nextCoreWebVitals,
    ...compat.extends('eslint:recommended'),
    ...compat.extends('plugin:react/recommended'),
    ...compat.extends('plugin:@typescript-eslint/recommended'),
    ...compat.extends('prettier'),
    {
        plugins: {
            'check-file': checkFile,
            prettier,
            react,
            'unused-imports': unusedImports,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },

            ecmaVersion: 2021,
            sourceType: 'module',

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        settings: {
            react: {
                version: 'detect',
            },

            'import/resolver': {
                typescript: {},
            },
        },

        rules: {
            'react-hooks/exhaustive-deps': 'off',
            'prettier/prettier': 'error',

            quotes: [
                'error',
                'single',
                {
                    avoidEscape: true,
                    allowTemplateLiterals: false,
                },
            ],

            'no-confusing-arrow': [
                'error',
                {
                    allowParens: false,
                },
            ],

            'no-unused-vars': 'off',
            'unused-imports/no-unused-imports': 'error',

            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],

            'object-curly-spacing': ['error', 'always'],
            'no-multiple-empty-lines': 'error',

            'no-console': [
                2,
                {
                    allow: ['warn', 'error'],
                },
            ],

            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        ['parent', 'sibling'],
                        'index',
                        'object',
                        'type',
                    ],

                    pathGroups: [
                        {
                            pattern: 'react',
                            group: 'external',
                            position: 'before',
                        },
                        {
                            pattern: 'next/**',
                            group: 'external',
                            position: 'before',
                        },
                        {
                            pattern: '@/**',
                            group: 'internal',
                            position: 'after',
                        },
                    ],

                    pathGroupsExcludedImportTypes: ['react', 'next'],
                    'newlines-between': 'always',

                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],

            'import/first': 'error',
            'import/newline-after-import': 'error',
            'import/no-duplicates': 'error',

            'tailwindcss/no-custom-classname': [
                0,
                {
                    whitelist: ['(?!(bg|text)\\-).*'],
                },
            ],

            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: ['function'],
                    format: ['PascalCase', 'camelCase'],
                },
                {
                    selector: ['typeProperty', 'typeParameter'],
                    format: ['camelCase', 'snake_case', 'PascalCase'],
                },
                {
                    selector: ['objectLiteralMethod', 'objectLiteralProperty'],
                    format: ['camelCase', 'snake_case'],

                    filter: {
                        regex: '^@|^__|[- ]|[. ]|',
                        match: false,
                    },

                    leadingUnderscore: 'allow',
                    trailingUnderscore: 'allow',
                },
                {
                    selector: 'class',
                    format: ['PascalCase'],
                },
                {
                    selector: ['typeProperty', 'typeParameter'],
                    format: ['camelCase', 'snake_case', 'PascalCase'],
                    leadingUnderscore: 'allow',
                    trailingUnderscore: 'allow',
                },
                {
                    selector: 'interface',
                    format: ['PascalCase'],

                    filter: {
                        regex: 'Props',
                        match: false,
                    },
                },
                {
                    selector: 'enumMember',
                    format: ['PascalCase'],
                },
                {
                    selector: 'typeAlias',
                    format: ['PascalCase'],
                },
                {
                    selector: 'property',
                    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],

                    filter: {
                        regex: '^__|[^a-zA-Z0-9_]|[- ]|[. ]|^_?[a-z][a-z0-9]*([A-Z][a-z]?[a-z0-9]*)*_[a-z][a-z0-9]*([A-Z][a-z]?[a-z0-9]*)*$',
                        match: false,
                    },

                    leadingUnderscore: 'allow',
                    trailingUnderscore: 'allow',
                },
            ],

            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-empty-interface': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
            'react/jsx-uses-vars': 'error',

            'react/jsx-filename-extension': [
                'warn',
                {
                    extensions: ['.ts', '.tsx'],
                },
            ],

            'react/display-name': 'warn',
            'react/prop-types': 'off',
            'react/no-unknown-property': 'off',
            'jsx-a11y/click-events-have-key-events': 'off',
            'jsx-a11y/anchor-is-valid': 'off',

            'jsx-a11y/no-noninteractive-element-interactions': [
                'error',
                {
                    handlers: [
                        'onClick',
                        'onMouseDown',
                        'onMouseUp',
                        'onKeyPress',
                        'onKeyDown',
                        'onKeyUp',
                    ],
                },
            ],

            'no-multi-spaces': 'error',
            'jsx-quotes': ['error', 'prefer-double'],
            'react/jsx-closing-tag-location': [1, 'line-aligned'],
            'react/jsx-closing-bracket-location': [1, 'line-aligned'],
            'react/jsx-boolean-value': ['error', 'never'],
            'jsx-a11y/alt-text': 'error',
            'jsx-a11y/img-redundant-alt': 'error',
            'jsx-a11y/no-access-key': 'error',
            'react/no-array-index-key': 'error',
            'react/no-string-refs': 'error',
            'react/jsx-wrap-multilines': 'error',
            'react/self-closing-comp': 'error',

            'react/jsx-no-bind': [
                'error',
                {
                    allowArrowFunctions: true,
                },
            ],

            'react/require-render-return': 'error',
            'react/sort-comp': 'warn',

            'check-file/folder-naming-convention': [
                'error',
                {
                    'src/app/**/':
                        '@(+([a-z])*(-+([a-z]))|\\[+([a-z]|\\.+)*(-+([a-z]))\\]|\\(+([a-z])*(-+([a-z]))\\))',
                },
            ],

            'check-file/filename-naming-convention': [
                'error',
                {
                    'src/app/**/*.{ts,tsx}':
                        '@(+([a-z0-9_-])*(-+([a-z]))|\\[+([a-z0-9_-])*(-+([a-z]))\\])',
                    'src/components/layouts/**/': 'PASCAL_CASE',
                    'src/components/ui/**/': 'PASCAL_CASE',
                    'src/components/templates/**/': 'PASCAL_CASE',
                    'src/modules/**/': 'PASCAL_CASE',
                },
            ],
        },
    },
    {
        files: ['./src/**/*.ts', './src/**/*.tsx'],
    },
]
