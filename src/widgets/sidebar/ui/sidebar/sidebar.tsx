import { type FC, memo, useCallback, useState } from 'react'

import { BurgerButton } from 'features/burger-button'
import { LanguageSwitcher } from 'features/language-switcher'
import { ThemeSwitcher } from 'features/theme-switcher'
import { cls } from 'shared/helpers/cls'
import { SidebarLink } from 'widgets/sidebar/ui/sidebar-link/sidebar-link'

import { LOCAL_STORAGE_SIDEBAR_KEY, SIDEBAR_LINKS } from '../../lib'

import s from './sidebar.module.scss'

interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
	const [isOpen, setIsOpen] = useState(localStorage.getItem(LOCAL_STORAGE_SIDEBAR_KEY) !== 'false' ?? false)

	const toggle = useCallback(() => {
		setIsOpen((prev) => {
			const next = !prev
			localStorage.setItem(LOCAL_STORAGE_SIDEBAR_KEY, next.toString())
			return next
		})
	}, [])

	return (
		<div className={cls(s.sidebar, className, !isOpen && s.collapsed)} data-testid='sidebar'>
			<div className={s.controls}>
				<BurgerButton isOpen={isOpen} toggle={toggle} />
				<div className={s.links}>
					{SIDEBAR_LINKS.map((item) => (
						<SidebarLink item={item} key={item.path} collapsed={!isOpen} />
					))}
				</div>
			</div>
			<div className={s.switchers}>
				<ThemeSwitcher className={s.theme} />
				<LanguageSwitcher short={!isOpen} className={s.language} />
			</div>
		</div>
	)
})
