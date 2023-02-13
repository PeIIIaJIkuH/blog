import { withRouter } from 'storybook-addon-react-router-v6'

import 'app/styles/index.scss'
import i18n from './i18n'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	themes: {
		default: 'light',
		list: [
			{
				name: 'light',
				class: ['app', 'light'],
			},
			{
				name: 'dark',
				class: ['app', 'dark'],
			},
		],
	},
	i18n,
	locale: 'en',
	locales: {
		en: 'English',
		ru: 'Русский',
	},
}

export const decorators = [withRouter]
