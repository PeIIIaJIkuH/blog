import { useCallback, useContext } from 'react'

import { LOCAL_STORAGE_THEME_KEY, type Theme, ThemeContext } from './theme-context'

interface UseTheme {
	theme: Theme
	toggleTheme: () => void
}

export const useTheme = (): UseTheme => {
	const { theme, setTheme } = useContext(ThemeContext)

	const toggleTheme = useCallback(() => {
		setTheme((prev) => {
			const newTheme = prev === 'light' ? 'dark' : 'light'
			localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
			return newTheme
		})
	}, [setTheme])

	return { theme, toggleTheme }
}
