import { type DecoratorFn } from '@storybook/react'
import { useMemo, useState } from 'react'

import { cls } from 'shared/helpers/cls'
import { type Theme, ThemeContext } from 'shared/providers/theme'

export const withTheme: DecoratorFn = (Story) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [theme, setTheme] = useState<Theme>('light')

	// eslint-disable-next-line react-hooks/rules-of-hooks
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
