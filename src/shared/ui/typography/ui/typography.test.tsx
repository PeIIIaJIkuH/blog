import { render, screen } from '@testing-library/react'

import { Typography } from './typography'

describe('shared/ui/typography', () => {
	it('should render', () => {
		render(<Typography text='Test' />)

		expect(screen.getByTestId('typography')).toBeInTheDocument()
		expect(screen.getByTestId('typography')).toHaveTextContent('Test')
		expect(screen.getByTestId('typography')).toHaveClass('size-md')
		expect(screen.getByTestId('typography')).toHaveClass('color-default')
		expect(screen.getByTestId('typography')).toHaveStyle({ fontWeight: 'normal' })
		expect(screen.getByTestId('typography')).toHaveClass('align-left')
		expect(screen.getByTestId('typography')).toHaveClass('transform-none')
		expect(screen.getByTestId('typography')).toHaveClass('decoration-none')
		expect(screen.getByTestId('typography')).toBeInstanceOf(HTMLParagraphElement)
	})

	it('should render with custom class name', () => {
		render(<Typography className='custom-class-name' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveClass('custom-class-name')
	})

	it('should render with size xs', () => {
		render(<Typography size='xs' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveClass('size-xs')
	})

	it('should render with size sm', () => {
		render(<Typography size='sm' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveClass('size-sm')
	})

	it('should render with size md', () => {
		render(<Typography size='md' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveClass('size-md')
	})

	it('should render with size lg', () => {
		render(<Typography size='lg' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveClass('size-lg')
	})

	it('should render with size xl', () => {
		render(<Typography size='xl' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveClass('size-xl')
	})

	it('should render with color default', () => {
		render(<Typography color='default' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveClass('color-default')
	})

	it('should render with color primary', () => {
		render(<Typography color='primary' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveClass('color-primary')
	})

	it('should render with color success', () => {
		render(<Typography color='success' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveClass('color-success')
	})

	it('should render with color danger', () => {
		render(<Typography color='danger' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveClass('color-danger')
	})

	it('should render with color warning', () => {
		render(<Typography color='warning' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveClass('color-warning')
	})

	it('should render with color info', () => {
		render(<Typography color='info' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveClass('color-info')
	})

	it('should render with weight light', () => {
		render(<Typography weight='light' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveStyle({ fontWeight: 'light' })
	})

	it('should render with weight normal', () => {
		render(<Typography weight='normal' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveStyle({ fontWeight: 'normal' })
	})

	it('should render with weight bold', () => {
		render(<Typography weight='bold' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveStyle({ fontWeight: 'bold' })
	})

	it('should render with align left', () => {
		render(<Typography align='left' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveClass('align-left')
	})

	it('should render with align center', () => {
		render(<Typography align='center' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveClass('align-center')
	})

	it('should render with align right', () => {
		render(<Typography align='right' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveClass('align-right')
	})

	it('should render with transform none', () => {
		render(<Typography transform='none' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveClass('transform-none')
	})

	it('should render with transform uppercase', () => {
		render(<Typography transform='uppercase' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveClass('transform-uppercase')
	})

	it('should render with transform lowercase', () => {
		render(<Typography transform='lowercase' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveClass('transform-lowercase')
	})

	it('should render with transform capitalize', () => {
		render(<Typography transform='capitalize' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveClass('transform-capitalize')
	})

	it('should render with decoration none', () => {
		render(<Typography decoration='none' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveClass('decoration-none')
	})

	it('should render with decoration underline', () => {
		render(<Typography decoration='underline' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveClass('decoration-underline')
	})

	it('should render with decoration line-through', () => {
		render(<Typography decoration='line-through' text='Test' />)

		expect(screen.getByTestId('typography')).toHaveClass('decoration-line-through')
	})

	it('should render as component p using as prop', () => {
		render(<Typography as='p' text='Test' />)

		expect(screen.getByTestId('typography')).toBeInstanceOf(HTMLParagraphElement)
	})

	it('should render as component span using as prop', () => {
		render(<Typography as='span' text='Test' />)

		expect(screen.getByTestId('typography')).toBeInstanceOf(HTMLSpanElement)
	})

	it('should render as component div using as prop', () => {
		render(<Typography as='div' text='Test' />)

		expect(screen.getByTestId('typography')).toBeInstanceOf(HTMLDivElement)
	})

	it('should render as component h1 using as prop', () => {
		render(<Typography as='h1' text='Test' />)

		expect(screen.getByTestId('typography')).toBeInstanceOf(HTMLHeadingElement)
	})

	it('should render as component h2 using as prop', () => {
		render(<Typography as='h2' text='Test' />)

		expect(screen.getByTestId('typography')).toBeInstanceOf(HTMLHeadingElement)
	})

	it('should render as component h3 using as prop', () => {
		render(<Typography as='h3' text='Test' />)

		expect(screen.getByTestId('typography')).toBeInstanceOf(HTMLHeadingElement)
	})

	it('should render as component h4 using as prop', () => {
		render(<Typography as='h4' text='Test' />)

		expect(screen.getByTestId('typography')).toBeInstanceOf(HTMLHeadingElement)
	})

	it('should render as component h5 using as prop', () => {
		render(<Typography as='h5' text='Test' />)

		expect(screen.getByTestId('typography')).toBeInstanceOf(HTMLHeadingElement)
	})

	it('should render as component h6 using as prop', () => {
		render(<Typography as='h6' text='Test' />)

		expect(screen.getByTestId('typography')).toBeInstanceOf(HTMLHeadingElement)
	})
})
