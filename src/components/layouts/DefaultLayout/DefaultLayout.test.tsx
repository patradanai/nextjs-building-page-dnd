import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import DefaultLayout from '.'

describe('DefaultLayout', () => {
    it('renders the todo app', () => {
        render(<DefaultLayout />)
    })
})
