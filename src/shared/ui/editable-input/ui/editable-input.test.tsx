import { act, fireEvent, render, screen } from '@testing-library/react'

import { EditableInput } from './editable-input'

describe('shared/ui/editable-input', () => {
	it('should render', () => {
		render(<EditableInput />)

		expect(screen.getByTestId('wrapper')).toBeInTheDocument()
	})

	it('should render with initial value', () => {
		render(<EditableInput initialValue='test' />)

		expect(screen.getByTestId('input')).toHaveValue('test')
	})

	it('should render with class name', () => {
		render(<EditableInput className='test' />)

		expect(screen.getByTestId('wrapper')).toHaveClass('test')
	})

	it('should call onUpdate', async () => {
		const onUpdate = jest.fn()

		render(<EditableInput onUpdate={onUpdate} />)

		expect(screen.getByTestId('input')).toHaveTextContent('')

		await act(async () => {
			fireEvent.focus(screen.getByTestId('input'))
			fireEvent.change(screen.getByTestId('input'), { target: { value: 'test' } })
			fireEvent.keyDown(screen.getByTestId('input'), { key: 'Enter', code: 'Enter' })
		})

		expect(onUpdate).toBeCalledWith('test')
	})
})
