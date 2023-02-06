import {FC} from 'react'

import {Theme, useTheme} from '@shared/providers/ThemeProvider'
import {cls} from '@shared/helpers/cls'
import {Button} from '@shared/ui/Button'

import s from './ThemeSwitcher.module.scss'

import MoonIcon from '@shared/assets/icons/moon.svg'
import SunIcon from '@shared/assets/icons/sun.svg'

interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
	const {theme, toggleTheme} = useTheme()

	return (
		<Button theme='clear' onClick={toggleTheme} className={cls(s.ThemeSwitcher, className)}>
			{theme === Theme.Light ? (
				<SunIcon color='white'/>
			) : (
				<MoonIcon/>
			)}
		</Button>
	)
}
