import { type DecoratorFn } from '@storybook/react'
import { useMemo, useState } from 'react'

import { cls } from 'shared/helpers/cls'
import { type Theme } from 'shared/providers/ThemeProvider'
import { ThemeContext } from 'shared/providers/ThemeProvider/lib/ThemeContext'

export const withTheme: DecoratorFn = (Story) => {
	const [theme, setTheme] = useState<Theme>('light')

	const defaultProps = useMemo(
		() => ({
			theme,
			setTheme,
		}),
		[theme],
	)

	return (
		<div className={cls('app', theme)}>
			<ThemeContext.Provider value={defaultProps}>
				<Story />
			</ThemeContext.Provider>
		</div>
	)
}
