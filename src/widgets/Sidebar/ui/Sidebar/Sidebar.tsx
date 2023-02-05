import {FC, useState} from 'react'

import {ThemeSwitcher} from '@shared/ui/ThemeSwitcher'
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
			<button onClick={toggle}>toggle</button>
			<div className={s.switchers}>
				<ThemeSwitcher/>
			</div>
		</div>
	)
}
