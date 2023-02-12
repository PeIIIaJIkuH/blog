import { screen } from '@testing-library/react'

import { renderWithTranslation } from 'shared/helpers/renderWithTranslation'

import { Sidebar } from './Sidebar'

describe('widgets/Sidebar', () => {
	it('should render successfully', () => {
		renderWithTranslation(<Sidebar />)

		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
	})
})
