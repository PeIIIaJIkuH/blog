import { screen } from '@testing-library/react'

import { renderComponent } from 'shared/helpers/render-component'

import { SIDEBAR_WIDTH } from '../../lib/constants'

import { Sidebar } from './sidebar'

describe('widgets/sidebar', () => {
	it('should render successfully', () => {
		renderComponent(<Sidebar isOpen width={SIDEBAR_WIDTH.OPEN} toggle={() => {}} />)

		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
		expect(screen.getByTestId('sidebar')).toHaveStyle(`width: ${SIDEBAR_WIDTH.OPEN}px`)
	})

	it('should render successfully with collapsed sidebar', () => {
		renderComponent(<Sidebar isOpen={false} width={SIDEBAR_WIDTH.COLLAPSED} toggle={() => {}} />)

		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
		expect(screen.getByTestId('sidebar')).toHaveStyle(`width: ${SIDEBAR_WIDTH.COLLAPSED}px`)
	})
})
