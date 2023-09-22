import { render, screen } from '@testing-library/react'

import { Skeleton } from './skeleton'

describe('shared/ui/skeleton', () => {
	it('should render', () => {
		render(<Skeleton />)

		expect(screen.getByTestId('skeleton')).toBeInTheDocument()
		expect(screen.getByTestId('skeleton')).toHaveStyle({ width: '100%', height: '1rem' })
		expect(screen.getByTestId('skeleton')).toHaveClass('radius-md')
		expect(screen.getByTestId('skeleton')).toHaveAttribute('data-animate')
	})

	it('should render with custom className', () => {
		render(<Skeleton className='custom-class' />)

		expect(screen.getByTestId('skeleton')).toHaveClass('custom-class')
	})

	it('should render with custom width', () => {
		render(<Skeleton width={2} />)

		expect(screen.getByTestId('skeleton')).toHaveStyle({ width: '2rem' })
	})

	it('should render with custom height', () => {
		render(<Skeleton height={2} />)

		expect(screen.getByTestId('skeleton')).toHaveStyle({ height: '2rem' })
	})

	it('should render with radius xs', () => {
		render(<Skeleton radius='xs' />)

		expect(screen.getByTestId('skeleton')).toHaveClass('radius-xs')
	})

	it('should render with radius sm', () => {
		render(<Skeleton radius='sm' />)

		expect(screen.getByTestId('skeleton')).toHaveClass('radius-sm')
	})

	it('should render with radius md', () => {
		render(<Skeleton radius='md' />)

		expect(screen.getByTestId('skeleton')).toHaveClass('radius-md')
	})

	it('should render with radius lg', () => {
		render(<Skeleton radius='lg' />)

		expect(screen.getByTestId('skeleton')).toHaveClass('radius-lg')
	})

	it('should render with radius xl', () => {
		render(<Skeleton radius='xl' />)

		expect(screen.getByTestId('skeleton')).toHaveClass('radius-xl')
	})

	it('should render without animation', () => {
		render(<Skeleton animate={false} />)

		expect(screen.getByTestId('skeleton')).not.toHaveAttribute('data-animate')
	})

	it('should render as circle', () => {
		render(<Skeleton circle />)

		expect(screen.getByTestId('skeleton')).toHaveStyle({ width: '1rem', height: '1rem', borderRadius: '50%' })
	})
})
