import { type FC, memo, useCallback, useState } from 'react'
import { flushSync } from 'react-dom'

import { cls } from 'shared/helpers/cls'
import { useTheme } from 'shared/providers/theme'
import { Button } from 'shared/ui/button'
import { Icon } from 'shared/ui/icon'

import s from './theme-switcher.module.scss'

interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
	const { theme, toggleTheme } = useTheme()
	const [newTheme, setNewTheme] = useState(theme)

	const onClick = useCallback(() => {
		flushSync(() => {
			setNewTheme(theme === 'light' ? 'dark' : 'light')
		}, [])
		setTimeout(() => {
			toggleTheme()
		})
	}, [theme, toggleTheme])

	return (
		<Button onClick={onClick} className={cls(s.themeSwitcher, className)} radius='sm'>
			<Icon type={newTheme === 'light' ? 'moon' : 'sun'} />
		</Button>
	)
})
