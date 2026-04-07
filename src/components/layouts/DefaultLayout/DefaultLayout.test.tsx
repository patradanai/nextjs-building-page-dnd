import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import { default as DefaultLayout } from './DefaultLayout'

describe('DefaultLayout', () => {
    it('renders the todo app', () => {
        render(<DefaultLayout />)
    })
})
