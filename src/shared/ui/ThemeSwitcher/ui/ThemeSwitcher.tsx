import {Theme, useTheme} from 'app/providers/ThemeProvider'
import {FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {Button, ButtonTheme} from 'shared/ui/Button'

import s from './ThemeSwitcher.module.scss'

import MoonIcon from 'shared/assets/icons/moon.svg'
import SunIcon from 'shared/assets/icons/sun.svg'

interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
	const {theme, toggleTheme} = useTheme()

	return (
		<Button theme={ButtonTheme.CLEAR} onClick={toggleTheme} className={classNames(s.ThemeSwitcher, {}, [className])}>
			{theme === Theme.Light ? (
				<SunIcon color='white'/>
			) : (
				<MoonIcon/>
			)}
		</Button>
	)
}
