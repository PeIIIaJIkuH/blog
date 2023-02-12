import { type FC } from 'react'

import { LanguageSwitcher } from 'features/LanguageSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { cls } from 'shared/helpers/cls'

import s from './Sidebar.module.scss'

interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	return (
		<div className={cls(s.Sidebar, className)}>
			<div></div>
			<div className={s.switchers}>
				<ThemeSwitcher />
				<LanguageSwitcher />
			</div>
		</div>
	)
}
