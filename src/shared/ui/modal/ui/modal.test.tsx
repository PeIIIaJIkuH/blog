import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { Modal } from './modal'

let root: HTMLDivElement

describe('shared/ui/modal', () => {
	const onClose = jest.fn()

	beforeEach(() => {
		root = document.createElement('div')
		root.setAttribute('id', 'root')
		document.body.appendChild(root)
	})

	afterEach(() => {
		jest.clearAllTimers()
	})

	it('should render', () => {
		render(
			<Modal isOpen onClose={onClose}>
				Test
			</Modal>,
		)

		expect(screen.getByTestId('wrapper')).toBeInTheDocument()
	})

	it('should not render', () => {
		render(
			<Modal isOpen={false} onClose={onClose}>
				Test
			</Modal>,
		)

		expect(screen.queryByTestId('wrapper')).not.toBeInTheDocument()
	})

	it('should call onClose', async () => {
		render(
			<Modal isOpen onClose={onClose}>
				Test
			</Modal>,
		)

		expect(onClose).not.toHaveBeenCalled()

		fireEvent.pointerDown(screen.getByTestId('wrapper'))
		fireEvent.pointerUp(screen.getByTestId('wrapper'))

		expect(screen.getByTestId('wrapper')).toHaveClass('closing')
		await waitFor(() => {
			expect(onClose).toHaveBeenCalled()
		})
	})

	it('should call onClose on escape', async () => {
		const onClose = jest.fn()

		render(
			<Modal isOpen onClose={onClose}>
				Test
			</Modal>,
		)

		expect(onClose).not.toHaveBeenCalled()

		fireEvent.keyDown(document, { key: 'Escape' })

		expect(screen.getByTestId('wrapper')).toHaveClass('closing')
		await waitFor(() => {
			expect(onClose).toHaveBeenCalled()
		})
	})
})
