import {FC, useState} from 'react'

import {ThemeSwitcher} from '@features/ThemeSwitcher'
import {LanguageSwitcher} from '@features/LanguageSwitcher'
import {Button} from '@shared/ui/Button'
import {cls} from '@shared/helpers/cls'

import s from './Sidebar.module.scss'

interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
	const [collapsed, setCollapsed] = useState(false)

	const toggle = () => setCollapsed(prev => !prev)

	return (
		<div className={cls(s.Sidebar, collapsed && s.collapsed, className)}>
			<Button onClick={toggle} className={s.toggleButton}>toggle</Button>
			<div className={s.switchers}>
				<ThemeSwitcher/>
				<LanguageSwitcher/>
			</div>
		</div>
	)
}
