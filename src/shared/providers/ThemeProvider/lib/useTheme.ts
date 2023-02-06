import {useContext} from 'react'

import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext'

interface UseThemeResult {
	theme: Theme
	toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
	const {theme, setTheme} = useContext(ThemeContext)

	const toggleTheme = () => {
		setTheme(prev => {
			const newTheme = prev === 'light' ? 'dark' : 'light'
			localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
			return newTheme
		})
	}

	return {theme, toggleTheme}
}
