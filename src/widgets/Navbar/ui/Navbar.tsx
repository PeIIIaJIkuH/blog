import {FC} from 'react'

import {AppRoutes, ERoutes} from '@shared/config/routes'
import {cls} from '@shared/helpers/cls'
import {AppLink, AppLinkTheme} from '@shared/ui/AppLink'
import {ThemeSwitcher} from '@shared/ui/ThemeSwitcher'

import s from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({className}) => {
	return (
		<div className={cls(s.Navbar, className)}>
			<ThemeSwitcher/>
			<div className={s.links}>
				<AppLink to={AppRoutes[ERoutes.HOME]} theme={AppLinkTheme.SECONDARY}>Main Page</AppLink>
				<AppLink to={AppRoutes[ERoutes.ABOUT]} theme={AppLinkTheme.SECONDARY}>About Page</AppLink>
			</div>
		</div>
	)
}
