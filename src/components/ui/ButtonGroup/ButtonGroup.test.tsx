import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import { default as ButtonGroup } from './ButtonGroup'

describe('ButtonGroup', () => {
    it('renders the todo app', () => {
        render(<ButtonGroup />)
    })
})
