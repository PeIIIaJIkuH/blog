import { render, screen } from '@testing-library/react'

import { Text } from './text'

describe('shared/ui/text', () => {
	it('should render', () => {
		render(<Text text='Test' />)

		expect(screen.getByTestId('text')).toBeInTheDocument()
		expect(screen.getByTestId('text')).toHaveTextContent('Test')
		expect(screen.getByTestId('text')).toHaveClass('size-md')
		expect(screen.getByTestId('text')).toHaveClass('color-default')
		expect(screen.getByTestId('text')).toHaveStyle({ fontWeight: 'normal' })
		expect(screen.getByTestId('text')).toHaveClass('align-left')
		expect(screen.getByTestId('text')).toHaveClass('transform-none')
		expect(screen.getByTestId('text')).toHaveClass('decoration-none')
		expect(screen.getByTestId('text')).toBeInstanceOf(HTMLParagraphElement)
	})

	it('should render with custom class name', () => {
		render(<Text className='custom-class-name' text='Test' />)

		expect(screen.getByTestId('text')).toHaveClass('custom-class-name')
	})

	it('should render with size xs', () => {
		render(<Text size='xs' text='Test' />)

		expect(screen.getByTestId('text')).toHaveClass('size-xs')
	})

	it('should render with size sm', () => {
		render(<Text size='sm' text='Test' />)

		expect(screen.getByTestId('text')).toHaveClass('size-sm')
	})

	it('should render with size md', () => {
		render(<Text size='md' text='Test' />)

		expect(screen.getByTestId('text')).toHaveClass('size-md')
	})

	it('should render with size lg', () => {
		render(<Text size='lg' text='Test' />)

		expect(screen.getByTestId('text')).toHaveClass('size-lg')
	})

	it('should render with size xl', () => {
		render(<Text size='xl' text='Test' />)

		expect(screen.getByTestId('text')).toHaveClass('size-xl')
	})

	it('should render with color default', () => {
		render(<Text color='default' text='Test' />)

		expect(screen.getByTestId('text')).toHaveClass('color-default')
	})

	it('should render with color primary', () => {
		render(<Text color='primary' text='Test' />)

		expect(screen.getByTestId('text')).toHaveClass('color-primary')
	})

	it('should render with color success', () => {
		render(<Text color='success' text='Test' />)

		expect(screen.getByTestId('text')).toHaveClass('color-success')
	})

	it('should render with color danger', () => {
		render(<Text color='danger' text='Test' />)

		expect(screen.getByTestId('text')).toHaveClass('color-danger')
	})

	it('should render with color warning', () => {
		render(<Text color='warning' text='Test' />)

		expect(screen.getByTestId('text')).toHaveClass('color-warning')
	})

	it('should render with color info', () => {
		render(<Text color='info' text='Test' />)

		expect(screen.getByTestId('text')).toHaveClass('color-info')
	})

	it('should render with weight light', () => {
		render(<Text weight='light' text='Test' />)

		expect(screen.getByTestId('text')).toHaveStyle({ fontWeight: 'light' })
	})

	it('should render with weight normal', () => {
		render(<Text weight='normal' text='Test' />)

		expect(screen.getByTestId('text')).toHaveStyle({ fontWeight: 'normal' })
	})

	it('should render with weight bold', () => {
		render(<Text weight='bold' text='Test' />)

		expect(screen.getByTestId('text')).toHaveStyle({ fontWeight: 'bold' })
	})

	it('should render with align left', () => {
		render(<Text align='left' text='Test' />)

		expect(screen.getByTestId('text')).toHaveClass('align-left')
	})

	it('should render with align center', () => {
		render(<Text align='center' text='Test' />)

		expect(screen.getByTestId('text')).toHaveClass('align-center')
	})

	it('should render with align right', () => {
		render(<Text align='right' text='Test' />)

		expect(screen.getByTestId('text')).toHaveClass('align-right')
	})

	it('should render with transform none', () => {
		render(<Text transform='none' text='Test' />)

		expect(screen.getByTestId('text')).toHaveClass('transform-none')
	})

	it('should render with transform uppercase', () => {
		render(<Text transform='uppercase' text='Test' />)

		expect(screen.getByTestId('text')).toHaveClass('transform-uppercase')
	})

	it('should render with transform lowercase', () => {
		render(<Text transform='lowercase' text='Test' />)

		expect(screen.getByTestId('text')).toHaveClass('transform-lowercase')
	})

	it('should render with transform capitalize', () => {
		render(<Text transform='capitalize' text='Test' />)

		expect(screen.getByTestId('text')).toHaveClass('transform-capitalize')
	})

	it('should render with decoration none', () => {
		render(<Text decoration='none' text='Test' />)

		expect(screen.getByTestId('text')).toHaveClass('decoration-none')
	})

	it('should render with decoration underline', () => {
		render(<Text decoration='underline' text='Test' />)

		expect(screen.getByTestId('text')).toHaveClass('decoration-underline')
	})

	it('should render with decoration line-through', () => {
		render(<Text decoration='line-through' text='Test' />)

		expect(screen.getByTestId('text')).toHaveClass('decoration-line-through')
	})

	it('should render with component p', () => {
		render(<Text component='p' text='Test' />)

		expect(screen.getByTestId('text')).toBeInstanceOf(HTMLParagraphElement)
	})

	it('should render with component span', () => {
		render(<Text component='span' text='Test' />)

		expect(screen.getByTestId('text')).toBeInstanceOf(HTMLSpanElement)
	})

	it('should render with component div', () => {
		render(<Text component='div' text='Test' />)

		expect(screen.getByTestId('text')).toBeInstanceOf(HTMLDivElement)
	})

	it('should render with component h1', () => {
		render(<Text component='h1' text='Test' />)

		expect(screen.getByTestId('text')).toBeInstanceOf(HTMLHeadingElement)
	})

	it('should render with component h2', () => {
		render(<Text component='h2' text='Test' />)

		expect(screen.getByTestId('text')).toBeInstanceOf(HTMLHeadingElement)
	})

	it('should render with component h3', () => {
		render(<Text component='h3' text='Test' />)

		expect(screen.getByTestId('text')).toBeInstanceOf(HTMLHeadingElement)
	})

	it('should render with component h4', () => {
		render(<Text component='h4' text='Test' />)

		expect(screen.getByTestId('text')).toBeInstanceOf(HTMLHeadingElement)
	})

	it('should render with component h5', () => {
		render(<Text component='h5' text='Test' />)

		expect(screen.getByTestId('text')).toBeInstanceOf(HTMLHeadingElement)
	})

	it('should render with component h6', () => {
		render(<Text component='h6' text='Test' />)

		expect(screen.getByTestId('text')).toBeInstanceOf(HTMLHeadingElement)
	})
})
