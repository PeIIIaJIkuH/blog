import { render, screen } from '@testing-library/react'

import { Button } from './button'

describe('shared/ui/button', () => {
	it('should render', () => {
		render(<Button>Test</Button>)

		expect(screen.getByTestId('button')).toBeInTheDocument()
		expect(screen.getByTestId('button')).toHaveTextContent('Test')
		expect(screen.getByTestId('button')).toHaveClass('variant-default')
		expect(screen.getByTestId('button')).toHaveClass('size-medium')
		expect(screen.getByTestId('button')).toHaveClass('radius-medium')
		expect(screen.getByTestId('button')).toHaveClass('color-primary')
		expect(screen.getByTestId('button')).not.toHaveClass('uppercase')
		expect(screen.getByTestId('button')).not.toHaveClass('loading')
	})

	it('should render with text', () => {
		render(<Button text='Test' />)

		expect(screen.getByTestId('button')).toHaveTextContent('Test')
	})

	it('should prioritize text over children', () => {
		render(<Button text='text'>children</Button>)

		expect(screen.getByTestId('button')).toHaveTextContent('text')
	})

	it('should render with variant default', () => {
		render(<Button variant='default'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('variant-default')
	})

	it('should render with variant outline', () => {
		render(<Button variant='outline'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('variant-outline')
	})

	it('should render with variant filled', () => {
		render(<Button variant='filled'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('variant-filled')
	})

	it('should render with size small', () => {
		render(<Button size='small'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('size-small')
	})

	it('should render with size medium', () => {
		render(<Button size='medium'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('size-medium')
	})

	it('should render with size large', () => {
		render(<Button size='large'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('size-large')
	})

	it('should render with radius small', () => {
		render(<Button radius='small'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('radius-small')
	})

	it('should render with radius medium', () => {
		render(<Button radius='medium'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('radius-medium')
	})

	it('should render with radius large', () => {
		render(<Button radius='large'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('radius-large')
	})

	it('should render with color primary', () => {
		render(<Button color='primary'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('color-primary')
	})

	it('should render with color success', () => {
		render(<Button color='success'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('color-success')
	})

	it('should render with color danger', () => {
		render(<Button color='danger'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('color-danger')
	})

	it('should render with color warning', () => {
		render(<Button color='warning'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('color-warning')
	})

	it('should render with color info', () => {
		render(<Button color='info'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('color-info')
	})

	it('should render with disabled', () => {
		render(<Button disabled>Test</Button>)

		expect(screen.getByTestId('button')).toHaveAttribute('disabled')
	})

	it('should render with uppercase', () => {
		render(<Button uppercase>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('uppercase')
	})

	it('should render with loading', () => {
		render(<Button loading>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('loading')
		expect(screen.getByTestId('loader')).toBeInTheDocument()
	})
})
