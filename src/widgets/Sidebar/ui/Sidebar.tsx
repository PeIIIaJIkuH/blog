import { type FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { LanguageSwitcher } from '@features/LanguageSwitcher'
import { ThemeSwitcher } from '@features/ThemeSwitcher'
import { cls } from '@shared/helpers/cls'
import { Button } from '@shared/ui/Button'

import s from './Sidebar.module.scss'

interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const { t } = useTranslation()
	const [collapsed, setCollapsed] = useState(false)

	const toggle = () => { setCollapsed(prev => !prev) }

	return (
		<div className={cls(s.Sidebar, collapsed && s.collapsed, className)}>
			<Button onClick={toggle} className={s.toggleButton}>
				{t('toggle-sidebar')}
			</Button>
			<div className={s.switchers}>
				<ThemeSwitcher/>
				<LanguageSwitcher/>
			</div>
		</div>
	)
}
