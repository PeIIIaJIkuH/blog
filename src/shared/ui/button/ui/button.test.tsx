import { render, screen } from '@testing-library/react'

import { Button } from './button'

describe('shared/ui/button', () => {
	it('should render', () => {
		render(<Button>Test</Button>)

		expect(screen.getByTestId('button')).toBeInTheDocument()
		expect(screen.getByTestId('button')).toHaveTextContent('Test')
		expect(screen.getByTestId('button')).toHaveClass('variant-default')
		expect(screen.getByTestId('button')).toHaveClass('size-md')
		expect(screen.getByTestId('button')).toHaveClass('radius-md')
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

	it('should render with size xs', () => {
		render(<Button size='xs'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('size-xs')
	})

	it('should render with size sm', () => {
		render(<Button size='sm'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('size-sm')
	})

	it('should render with size md', () => {
		render(<Button size='md'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('size-md')
	})

	it('should render with size lg', () => {
		render(<Button size='lg'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('size-lg')
	})

	it('should render with size xl', () => {
		render(<Button size='xl'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('size-xl')
	})

	it('should render with radius xs', () => {
		render(<Button radius='xs'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('radius-xs')
	})

	it('should render with radius sm', () => {
		render(<Button radius='sm'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('radius-sm')
	})

	it('should render with radius md', () => {
		render(<Button radius='md'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('radius-md')
	})

	it('should render with radius large', () => {
		render(<Button radius='lg'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('radius-lg')
	})

	it('should render with radius xl', () => {
		render(<Button radius='xl'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('radius-xl')
	})

	it('should render with radius none', () => {
		render(<Button radius='none'>Test</Button>)

		expect(screen.getByTestId('button')).toHaveClass('radius-none')
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
