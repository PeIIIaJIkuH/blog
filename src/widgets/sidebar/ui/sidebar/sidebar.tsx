import { type FC, memo, useMemo, useState, useCallback } from 'react'

import { useAppSelector } from 'app/store'
import { getUserUser } from 'entities/user'
import { LS_KEYS } from 'shared/constants/local-storage'
import { cls } from 'shared/helpers/cls'

import { SIDEBAR_LINKS } from '../../lib/constants'
import { BurgerButton } from '../burger-button/burger-button'
import { LanguageSwitcher } from '../language-switcher/language-switcher'
import { SidebarLink } from '../sidebar-link/sidebar-link'
import { ThemeSwitcher } from '../theme-switcher/theme-switcher'

import s from './sidebar.module.scss'

interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
	const [isOpen, setIsOpen] = useState(localStorage.getItem(LS_KEYS.SIDEBAR_OPEN) !== 'false' ?? false)

	const toggle = useCallback(() => {
		setIsOpen((prev) => {
			const next = !prev
			localStorage.setItem(LS_KEYS.SIDEBAR_OPEN, next.toString())
			return next
		})
	}, [])

	const user = useAppSelector(getUserUser)

	const filteredLinks = useMemo(() => SIDEBAR_LINKS.filter((item) => !item.auth || user), [user])

	return (
		<div className={cls(s.sidebar, className, !isOpen && s.collapsed)} data-testid='sidebar'>
			<div className={s.controls}>
				<BurgerButton isOpen={isOpen} toggle={toggle} />
				<div className={s.links}>
					{filteredLinks.map((item) => (
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
