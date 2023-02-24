import { fireEvent, render, screen } from '@testing-library/react'

import { Input } from './input'

describe('shared/input', () => {
	it('should render', () => {
		render(<Input />)

		expect(screen.getByTestId('wrapper')).toBeInTheDocument()
	})

	it('should render with value', () => {
		render(<Input value='Test' />)

		expect(screen.getByDisplayValue('Test')).toBeInTheDocument()
	})

	it('should clear its value on clear button click', () => {
		const onChange = jest.fn()
		render(<Input value='Test' onChange={onChange} clearable />)

		const clearButton = screen.getByTestId('clear-button')
		fireEvent.click(clearButton)

		expect(onChange).toHaveBeenCalledWith('')
	})

	it('should be autofocused', () => {
		render(<Input autoFocus />)

		expect(screen.getByTestId('input')).toHaveFocus()
	})

	it('should change input type on show password button click', () => {
		render(<Input value='Test' type='password' />)

		const showPasswordButton = screen.getByTestId('show-password-button')
		fireEvent.click(showPasswordButton)

		expect(screen.getByDisplayValue('Test')).toHaveAttribute('type', 'text')
	})
})
