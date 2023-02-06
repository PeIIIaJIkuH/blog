import { createContext, type Dispatch, type SetStateAction } from 'react'

export const AllThemes = ['light', 'dark'] as const
export type Theme = typeof AllThemes[number]

export interface ThemeContextProps {
	theme: Theme
	setTheme: Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContextProps>({
	theme: 'light',
	setTheme: () => {},
})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
