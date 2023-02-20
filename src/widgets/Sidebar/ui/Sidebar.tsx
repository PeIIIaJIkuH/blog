import { type FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { BurgerButton } from 'features/BurgerButton'
import { LanguageSwitcher } from 'features/LanguageSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import HomeIcon from 'shared/assets/icons/home.svg'
import NotesIcon from 'shared/assets/icons/notes.svg'
import { cls } from 'shared/helpers/cls'
import { AppLink } from 'shared/ui/AppLink'

import s from './Sidebar.module.scss'

interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [isOpen, setIsOpen] = useState(false)
	const { t } = useTranslation()

	const toggle = useCallback(() => {
		setIsOpen((prev) => !prev)
	}, [])

	return (
		<div className={cls(s.Sidebar, className, !isOpen && s.collapsed)} data-testid='sidebar'>
			<div className={s.controls}>
				<BurgerButton isOpen={isOpen} toggle={toggle} />
				<div className={s.links}>
					<AppLink to='home' className={cls(s.link, !isOpen && s.collapsed)}>
						<HomeIcon />
						<span>{t('main:header.home')}</span>
					</AppLink>
					<AppLink to='about' className={cls(s.link, !isOpen && s.collapsed)}>
						<NotesIcon />
						<span>{t('main:header.about')}</span>
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
