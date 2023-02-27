import { render } from '@testing-library/react'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { store } from 'app/store'
import i18nForTests from 'shared/config/i18n-for-tests'

interface RenderComponentOptions {
	route?: string
}

export const renderComponent = (component: ReactNode, options: RenderComponentOptions = {}) => {
	const { route = '/' } = options

	return render(
		<MemoryRouter initialEntries={[route]}>
			<Provider store={store}>
				<I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
			</Provider>
		</MemoryRouter>,
	)
}
