import { type FC, memo, useMemo, type CSSProperties } from 'react'

import { useAppSelector } from 'app/store'
import { getUser } from 'entities/user'
import { BurgerButton } from 'features/burger-button'
import { LanguageSwitcher } from 'features/language-switcher'
import { ThemeSwitcher } from 'features/theme-switcher'
import { cls } from 'shared/helpers/cls'
import { SidebarLink } from 'widgets/sidebar/ui/sidebar-link/sidebar-link'

import { SIDEBAR_LINKS } from '../../lib/constants'

import s from './sidebar.module.scss'

interface SidebarProps {
	className?: string
	isOpen: boolean
	width: number
	toggle: () => void
}

export const Sidebar: FC<SidebarProps> = memo(({ className, isOpen, width, toggle }) => {
	const user = useAppSelector(getUser)

	const filteredLinks = useMemo(() => SIDEBAR_LINKS.filter((item) => !item.auth || user), [user])

	const styles: CSSProperties = useMemo(() => ({ width }), [width])

	return (
		<div className={cls(s.sidebar, className, !isOpen && s.collapsed)} style={styles} data-testid='sidebar'>
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
