import { render } from '@testing-library/react'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'

// eslint-disable-next-line boundaries/element-types
import { StoreProvider } from 'app/providers/store'
import i18nForTests from 'shared/config/i18n-for-tests'

interface RenderComponentOptions {
	route?: string
}

export const renderComponent = (component: ReactNode, options: RenderComponentOptions = {}) => {
	const { route = '/' } = options

	return render(
		<StoreProvider>
			<MemoryRouter initialEntries={[route]}>
				<I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
			</MemoryRouter>
		</StoreProvider>,
	)
}
