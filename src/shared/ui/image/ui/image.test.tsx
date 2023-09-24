import { render, screen } from '@testing-library/react'

import { Image } from './image'

describe('shared/ui/image', () => {
	it('should render', () => {
		render(<Image src='https://placehold.co/600x400' alt='placeholder image' width={600} height={400} />)

		expect(screen.getByTestId('image')).toBeInTheDocument()
		expect(screen.getByTestId('image')).toHaveStyle({ width: '600px', height: '400px' })
		expect(screen.getByTestId('image')).toHaveClass('radius-none')
		expect(screen.getByTestId('image')).toHaveClass('object-fit-cover')
	})

	it('should render with custom className', () => {
		render(
			<Image
				src='https://placehold.co/600x400'
				alt='placeholder image'
				width={600}
				height={400}
				className='custom-class'
			/>,
		)

		expect(screen.getByTestId('image')).toHaveClass('custom-class')
	})

	it('should render with only width', () => {
		render(<Image src='https://placehold.co/600x400' alt='placeholder image' width={400} />)

		expect(screen.getByTestId('image')).toHaveStyle({ width: '400px', height: '400px' })
	})

	it('should render with only height', () => {
		render(<Image src='https://placehold.co/600x400' alt='placeholder image' height={400} />)

		expect(screen.getByTestId('image')).toHaveStyle({ width: '400px', height: '400px' })
	})

	it('should render with radius none', () => {
		render(<Image src='https://placehold.co/600x400' alt='placeholder image' width={600} height={400} radius='none' />)

		expect(screen.getByTestId('image')).toHaveClass('radius-none')
	})

	it('should render with radius xs', () => {
		render(<Image src='https://placehold.co/600x400' alt='placeholder image' width={600} height={400} radius='xs' />)

		expect(screen.getByTestId('image')).toHaveClass('radius-xs')
	})

	it('should render with radius sm', () => {
		render(<Image src='https://placehold.co/600x400' alt='placeholder image' width={600} height={400} radius='sm' />)

		expect(screen.getByTestId('image')).toHaveClass('radius-sm')
	})

	it('should render with radius md', () => {
		render(<Image src='https://placehold.co/600x400' alt='placeholder image' width={600} height={400} radius='md' />)

		expect(screen.getByTestId('image')).toHaveClass('radius-md')
	})

	it('should render with radius lg', () => {
		render(<Image src='https://placehold.co/600x400' alt='placeholder image' width={600} height={400} radius='lg' />)

		expect(screen.getByTestId('image')).toHaveClass('radius-lg')
	})

	it('should render with radius xl', () => {
		render(<Image src='https://placehold.co/600x400' alt='placeholder image' width={600} height={400} radius='xl' />)

		expect(screen.getByTestId('image')).toHaveClass('radius-xl')
	})

	it('should render as circle, only height', () => {
		render(<Image src='https://placehold.co/600x400' alt='placeholder image' height={400} circle />)

		expect(screen.getByTestId('image')).toHaveStyle({ width: '400px', height: '400px', borderRadius: '50%' })
	})

	it('should render as circle, only width', () => {
		render(<Image src='https://placehold.co/600x400' alt='placeholder image' width={400} circle />)

		expect(screen.getByTestId('image')).toHaveStyle({ width: '400px', height: '400px', borderRadius: '50%' })
	})

	it('should render as circle, width and height', () => {
		render(<Image src='https://placehold.co/600x400' alt='placeholder image' width={400} height={400} circle />)

		expect(screen.getByTestId('image')).toHaveStyle({ width: '400px', height: '400px', borderRadius: '50%' })
	})

	it('should render as circle, height is greater than width', () => {
		render(<Image src='https://placehold.co/600x400' alt='placeholder image' width={200} height={400} circle />)

		expect(screen.getByTestId('image')).toHaveStyle({ width: '400px', height: '400px', borderRadius: '50%' })
	})

	it('should render as circle, width is greater than height', () => {
		render(<Image src='https://placehold.co/600x400' alt='placeholder image' width={400} height={200} circle />)

		expect(screen.getByTestId('image')).toHaveStyle({ width: '200px', height: '200px', borderRadius: '50%' })
	})
})
