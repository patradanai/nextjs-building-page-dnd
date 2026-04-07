import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom'

import { default as Button } from './Button'

describe('Button Component', () => {
    test('Case 1: Button Disable', async () => {
        render(
            <Button variant={'contained'} size={'md'} disabled>
                disable
            </Button>
        )
        await userEvent.click(screen.getByText(/disable/i))
        expect(screen.getByText(/disable/i)).toBeDisabled()
    })

    test('Case 2: Button Elevation Enable', async () => {
        render(
            <Button variant={'contained'} size={'md'} disableElevation>
                elevation
            </Button>
        )
        const el = screen.getByText(/elevation/i)

        expect(el).toHaveClass('shadow-none')

        await userEvent.hover(el)

        expect(el).toHaveClass('shadow-none')
    })

    test('Case 3: Button Spinner', async () => {
        render(
            <Button variant={'contained'} size={'md'} loading>
                test
            </Button>
        )
        const el = screen.getByText(/test/i)

        expect(el).toBeDisabled()

        expect(screen.getByTestId('spinner-id')).toBeVisible()
    })

    test('Case 4: Default Color should be primary', () => {
        render(
            <Button variant={'contained'} size={'md'}>
                test
            </Button>
        )
    })
})
