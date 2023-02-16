import { type FC, useState } from 'react'

import { BurgerButton } from 'features/BurgerButton'
import { LanguageSwitcher } from 'features/LanguageSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { cls } from 'shared/helpers/cls'

import s from './Sidebar.module.scss'

interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={cls(s.Sidebar, className, !isOpen && s.collapsed)} data-testid='sidebar'>
			<BurgerButton isOpen={isOpen} toggle={toggle} />
			<div className={s.switchers}>
				<ThemeSwitcher />
				<LanguageSwitcher short={!isOpen} />
			</div>
		</div>
	)
}
