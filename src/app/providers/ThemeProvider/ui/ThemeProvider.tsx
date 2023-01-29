import {FC, useMemo, useState} from 'react'
import {Theme, ThemeContext} from '../lib/ThemeContext'

const isTheme = (theme: string): theme is Theme => typeof theme === 'string' &&
	Object.values(Theme).includes(theme as Theme)

const getDefaultTheme = (): Theme => {
	const theme = localStorage.getItem('theme')
	return theme && isTheme(theme) ? theme : Theme.Light
}

export const ThemeProvider: FC = ({children}) => {
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
