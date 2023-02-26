import { render, screen } from '@testing-library/react'

import { Loader } from './loader'

describe('shared/loader', () => {
	it('should render', () => {
		render(<Loader />)

		expect(screen.getByTestId('loader')).toBeInTheDocument()
		expect(screen.getByTestId('loader')).toHaveClass('size-medium')
	})

	it('should render with size small', () => {
		render(<Loader size='small' />)

		expect(screen.getByTestId('loader')).toHaveClass('size-small')
	})

	it('should render with size medium', () => {
		render(<Loader size='medium' />)

		expect(screen.getByTestId('loader')).toHaveClass('size-medium')
	})

	it('should render with size large', () => {
		render(<Loader size='large' />)

		expect(screen.getByTestId('loader')).toHaveClass('size-large')
	})
})
