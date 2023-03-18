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
		jest.clearAllMocks()
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

		void waitFor(() => {
			expect(onClose).toHaveBeenCalled()
			expect(screen.getByTestId('wrapper')).not.toBeInTheDocument()
		})
	})

	it('should call onClose on escape', async () => {
		render(
			<Modal isOpen onClose={onClose}>
				Test
			</Modal>,
		)

		expect(onClose).not.toHaveBeenCalled()

		fireEvent.keyDown(document, { key: 'Escape' })

		void waitFor(() => {
			expect(onClose).toHaveBeenCalled()
			expect(screen.getByTestId('wrapper')).not.toBeInTheDocument()
		})
	})
})
