import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import { default as ButtonToggle } from './ButtonToggle'

describe('ButtonToggle', () => {
    it('renders the todo app', () => {
        render(<ButtonToggle />)
    })
})
