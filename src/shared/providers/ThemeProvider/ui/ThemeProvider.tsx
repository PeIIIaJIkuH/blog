import {FC, PropsWithChildren, useMemo, useState} from 'react'

import {AllThemes, Theme, ThemeContext} from '../lib/ThemeContext'

const isTheme = (theme: string): theme is Theme => typeof theme === 'string' &&
	Object.values(AllThemes).includes(theme as Theme)

const getDefaultTheme = (): Theme => {
	const theme = localStorage.getItem('theme')
	return theme && isTheme(theme) ? theme : 'light'
}

export const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
	const [theme, setTheme] = useState<Theme>(getDefaultTheme())

	const defaultProps = useMemo(() => ({
		theme,
		setTheme,
	}), [theme])

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	)
}
