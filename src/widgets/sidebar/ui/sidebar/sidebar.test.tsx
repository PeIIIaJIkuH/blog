import { screen } from '@testing-library/react'

import { renderComponent } from 'shared/helpers/render-component'

import { Sidebar } from './sidebar'

Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: jest.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(),
		removeListener: jest.fn(),
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	})),
})

describe('widgets/sidebar', () => {
	it('should render successfully', () => {
		renderComponent(<Sidebar />)

		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
	})
})
