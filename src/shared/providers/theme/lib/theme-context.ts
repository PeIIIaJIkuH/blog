import { createContext, type Dispatch, type SetStateAction } from 'react'

export const AllThemes = ['light', 'dark'] as const
export type Theme = (typeof AllThemes)[number]

interface ThemeContextProps {
	theme: Theme
	setTheme: Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContextProps>({
	theme: 'light',
	setTheme: () => {},
})
