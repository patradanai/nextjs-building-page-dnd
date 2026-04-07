import { render, screen } from '@testing-library/react'

import { CarouselSlider } from './CarouselSlider'

describe('Spinner Loading Component', () => {
    describe('Input Selection', () => {
        it('should render correctly', () => {
            render(<CarouselSlider>1</CarouselSlider>)

            const input = screen.getByTestId('spinner-id')

            expect(input).toBeInTheDocument()
        })
    })
})
