import {FC} from 'react'
import {AppRoutes, RoutePath} from 'shared/config/routeConfig/routeConfig'
import {classNames} from 'shared/lib/classNames/classNames'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink'
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher'
import s from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({className}) => {
	return (
		<div className={classNames(s.Navbar, {}, [className])}>
			<ThemeSwitcher/>
			<div className={s.links}>
				<AppLink to={RoutePath[AppRoutes.MAIN]} theme={AppLinkTheme.SECONDARY}>Main Page</AppLink>
				<AppLink to={RoutePath[AppRoutes.ABOUT]} theme={AppLinkTheme.SECONDARY}>About Page</AppLink>
			</div>
		</div>
	)
}
