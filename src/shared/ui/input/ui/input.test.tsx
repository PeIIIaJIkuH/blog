import { fireEvent, render, screen } from '@testing-library/react'

import { Input } from './input'

describe('shared/ui/input', () => {
	it('should render', () => {
		render(<Input />)

		expect(screen.getByTestId('wrapper')).toBeInTheDocument()
		expect(screen.getByTestId('input')).toHaveAttribute('type', 'text')
		expect(screen.getByTestId('input')).toHaveAttribute('value', '')
	})

	it('should render with value', () => {
		render(<Input value='Test' />)

		expect(screen.getByDisplayValue('Test')).toBeInTheDocument()
	})

	it('should render with type text', () => {
		render(<Input type='text' />)

		expect(screen.getByTestId('input')).toHaveAttribute('type', 'text')
	})

	it('should render with type password', () => {
		render(<Input type='password' />)

		expect(screen.getByTestId('input')).toHaveAttribute('type', 'password')
	})

	it('should render with type number', () => {
		render(<Input type='number' />)

		expect(screen.getByTestId('input')).toHaveAttribute('type', 'number')
	})

	it('should not render clear button with no value', () => {
		render(<Input clearable />)

		expect(screen.queryByTestId('clear-button')).not.toBeInTheDocument()
	})

	it('should render clear button with value', () => {
		render(<Input value='Test' clearable />)

		expect(screen.getByTestId('clear-button')).toBeInTheDocument()
	})

	it('should clear its value on clear button click', () => {
		const onChange = jest.fn()
		render(<Input value='Test' onChange={onChange} clearable />)

		const clearButton = screen.getByTestId('clear-button')
		fireEvent.click(clearButton)

		expect(onChange).toHaveBeenCalledWith('')
	})

	it('should have autofocus', () => {
		render(<Input autoFocus />)

		expect(screen.getByTestId('input')).toHaveFocus()
	})

	it('should change input type on show password button click', () => {
		render(<Input value='Test' type='password' />)

		expect(screen.getByDisplayValue('Test')).toHaveAttribute('type', 'password')

		const showPasswordButton = screen.getByTestId('show-password-button')
		fireEvent.click(showPasswordButton)

		expect(screen.getByDisplayValue('Test')).toHaveAttribute('type', 'text')
	})
})
