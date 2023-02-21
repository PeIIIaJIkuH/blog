import { type FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { BurgerButton } from 'features/burger-button'
import { LanguageSwitcher } from 'features/language-switcher'
import { ThemeSwitcher } from 'features/theme-switcher'
import HomeIcon from 'shared/assets/icons/home.svg'
import NotesIcon from 'shared/assets/icons/notes.svg'
import { cls } from 'shared/helpers/cls'
import { AppLink } from 'shared/ui/app-link'

import { LOCAL_STORAGE_SIDEBAR_KEY } from '../lib'

import s from './sidebar.module.scss'

interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [isOpen, setIsOpen] = useState(localStorage.getItem(LOCAL_STORAGE_SIDEBAR_KEY) !== 'false' ?? false)
	const { t } = useTranslation()

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
					<AppLink to='home' nav className={cls(s.link, !isOpen && s.collapsed)}>
						<HomeIcon />
						<span>{t('header.home')}</span>
					</AppLink>
					<AppLink to='about' nav className={cls(s.link, !isOpen && s.collapsed)}>
						<NotesIcon />
						<span>{t('header.about')}</span>
					</AppLink>
				</div>
			</div>
			<div className={s.switchers}>
				<ThemeSwitcher className={s.theme} />
				<LanguageSwitcher short={!isOpen} className={s.language} />
			</div>
		</div>
	)
}
