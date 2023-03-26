import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { ImageInput } from './image-input'

describe('shared/ui/image-input', () => {
	it('should render', () => {
		render(<ImageInput variant='changeButton' />)

		expect(screen.getByTestId('wrapper')).toBeInTheDocument()
	})

	it('should render with class name', () => {
		render(<ImageInput className='test' variant='changeButton' />)

		expect(screen.getByTestId('wrapper')).toHaveClass('test')
	})

	it('should render with image', () => {
		render(<ImageInput image='test' variant='changeButton' />)

		expect(screen.getByTestId('wrapper')).toHaveStyle('background-image: url(test)')
	})

	it('should call updateImage', () => {
		const updateImage = jest.fn()

		render(<ImageInput updateImage={updateImage} variant='changeButton' />)

		act(() => {
			fireEvent.change(screen.getByTestId('file-input'), {
				target: { files: [new File(['test'], 'test.png', { type: 'image/png' })] },
			})
		})

		void waitFor(() => {
			expect(updateImage).toBeCalled()
		})
	})
})
