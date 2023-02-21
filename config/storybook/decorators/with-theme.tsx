import { type DecoratorFn } from '@storybook/react'

import { ThemeProvider } from 'shared/providers/theme'

export const withTheme: DecoratorFn = (Story) => (
	<ThemeProvider>
		<Story />
	</ThemeProvider>
)
