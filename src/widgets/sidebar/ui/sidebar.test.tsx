import { screen } from '@testing-library/react'

import { renderComponent } from 'shared/helpers/render-component'

import { Sidebar } from './sidebar'

describe('widgets/Sidebar', () => {
	it('should render successfully', () => {
		renderComponent(<Sidebar />)

		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
	})
})
