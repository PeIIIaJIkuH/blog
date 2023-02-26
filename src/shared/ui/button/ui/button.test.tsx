import { render, screen } from '@testing-library/react'

import { Button } from './button'

describe('shared/button', () => {
	it('should render', () => {
		render(<Button>Test</Button>)

		expect(screen.getByTestId('button')).toBeInTheDocument()
	})

	it('should render with variant', () => {
		render(<Button variant='outline'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('variant-outline')
	})

	it('should render with size', () => {
		render(<Button size='small'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('size-small')
	})

	it('should render with color', () => {
		render(<Button color='primary'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('color-primary')
	})

	it('should render with disabled', () => {
		render(<Button disabled>Test</Button>)

		expect(screen.getByTestId('button')).toHaveAttribute('disabled')
	})

	it('should render with uppercase', () => {
		render(<Button uppercase>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('uppercase')
	})

	it('should render with radius', () => {
		render(<Button radius='small'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('radius-small')
	})

	it('should render with loading', () => {
		render(<Button loading>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('loading')
		expect(screen.getByTestId('loader')).toBeInTheDocument()
	})
})
