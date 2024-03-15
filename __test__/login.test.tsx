import Page from '../src/app/login/page'
import {render, screen} from '@testing-library/react'

describe('Page', () => {
    it('renders a heading', () => {
        const { getByLabelText, getByText } =render(<Page />)

        const heading = screen.getByRole('heading', { level: 1 })
        // expect(screen.getByLabelText('username').toBeInTheDocument());
        expect(heading).toBeInTheDocument()
    })
})