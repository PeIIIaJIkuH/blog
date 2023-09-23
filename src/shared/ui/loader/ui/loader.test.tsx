import { render, screen } from '@testing-library/react'

import { Loader } from './loader'

describe('shared/ui/loader', () => {
	it('should render', () => {
		render(<Loader />)

		expect(screen.getByTestId('loader')).toBeInTheDocument()
		expect(screen.getByTestId('loader')).toHaveClass('size-medium')
	})

	it('should render with size xs', () => {
		render(<Loader size='xs' />)

		expect(screen.getByTestId('loader')).toHaveClass('size-xs')
	})

	it('should render with size sm', () => {
		render(<Loader size='sm' />)

		expect(screen.getByTestId('loader')).toHaveClass('size-sm')
	})

	it('should render with size md', () => {
		render(<Loader size='md' />)

		expect(screen.getByTestId('loader')).toHaveClass('size-md')
	})

	it('should render with size lg', () => {
		render(<Loader size='lg' />)

		expect(screen.getByTestId('loader')).toHaveClass('size-lg')
	})

	it('should render with size xl', () => {
		render(<Loader size='xl' />)

		expect(screen.getByTestId('loader')).toHaveClass('size-xl')
	})
})
