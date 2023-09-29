import { useCallback, useContext, useEffect } from 'react'

import { LS_KEYS } from 'shared/constants/local-storage'

import { type Theme, ThemeContext } from './theme-context'

interface UseTheme {
	theme: Theme
	toggleTheme: () => void
}

export const useTheme = (): UseTheme => {
	const { theme, setTheme } = useContext(ThemeContext)

	const updateTheme = useCallback(
		(newTheme: Theme) => {
			setTheme(newTheme)
			localStorage.setItem(LS_KEYS.THEME, newTheme)
		},
		[setTheme],
	)

	const toggleTheme = useCallback(() => {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		updateTheme(newTheme)
	}, [theme, updateTheme])

	useEffect(() => {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
			const newTheme = e.matches ? 'dark' : 'light'
			updateTheme(newTheme)
		})
	}, [setTheme, updateTheme])

	return { theme, toggleTheme }
}
