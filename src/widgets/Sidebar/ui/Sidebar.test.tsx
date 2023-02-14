import { screen } from '@testing-library/react'

import { renderComponent } from 'shared/helpers/renderComponent'

import { Sidebar } from './Sidebar'

describe('widgets/Sidebar', () => {
	it('should render successfully', () => {
		renderComponent(<Sidebar />)

		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
	})
})
