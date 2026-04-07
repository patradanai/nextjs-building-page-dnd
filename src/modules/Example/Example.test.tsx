import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import { default as Example } from './Example'

describe('Example', () => {
    it('renders the todo app', () => {
        render(<Example />)
    })
})
