import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { Modal } from './modal'

let root: HTMLDivElement

describe('shared/ui/modal', () => {
	beforeEach(() => {
		root = document.createElement('div')
		root.setAttribute('id', 'root')
		document.body.appendChild(root)
	})

	it('should render', () => {
		render(<Modal isOpen>Test</Modal>)

		expect(screen.getByTestId('wrapper')).toBeInTheDocument()
	})

	it('should not render', () => {
		render(<Modal isOpen={false}>Test</Modal>)

		expect(screen.queryByTestId('wrapper')).not.toBeInTheDocument()
	})

	it('should call onClose', async () => {
		const onClose = jest.fn()

		render(
			<Modal isOpen onClose={onClose}>
				Test
			</Modal>,
		)

		expect(onClose).not.toHaveBeenCalled()

		fireEvent.click(screen.getByTestId('wrapper'))

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
