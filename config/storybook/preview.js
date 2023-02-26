import { withRouter } from 'storybook-addon-react-router-v6'

import { withStore } from 'shared/config/storybook'

import 'app/styles/index.scss'
import { withTheme } from './decorators/with-theme'
import i18n from './i18n'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	i18n,
	locale: 'en',
	locales: {
		en: 'English',
		ru: 'Русский',
	},
}

export const decorators = [withStore(), withRouter, withTheme]
