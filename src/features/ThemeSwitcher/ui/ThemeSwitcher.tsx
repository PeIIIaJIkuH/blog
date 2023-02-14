import { type FC } from 'react'

import MoonIcon from 'shared/assets/icons/moon.svg'
import SunIcon from 'shared/assets/icons/sun.svg'
import { cls } from 'shared/helpers/cls'
import { useTheme } from 'shared/providers/ThemeProvider'
import { Button } from 'shared/ui/Button'

import s from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
	const { theme, toggleTheme } = useTheme()

	return (
		<Button onClick={toggleTheme} className={cls(s.ThemeSwitcher, className)}>
			{theme === 'light' ? <MoonIcon /> : <SunIcon />}
		</Button>
	)
}
