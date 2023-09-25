import { useCallback, useContext } from 'react'

import { LS_KEYS } from 'shared/constants/local-storage'

import { type Theme, ThemeContext } from './theme-context'

interface UseTheme {
	theme: Theme
	toggleTheme: () => void
}

export const useTheme = (): UseTheme => {
	const { theme, setTheme } = useContext(ThemeContext)

	const toggleTheme = useCallback(() => {
		setTheme((prev) => {
			const newTheme = prev === 'light' ? 'dark' : 'light'
			localStorage.setItem(LS_KEYS.THEME, newTheme)
			return newTheme
		})
	}, [setTheme])

	return { theme, toggleTheme }
}
