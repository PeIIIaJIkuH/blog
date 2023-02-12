import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { AppRoutes, RoutePath } from 'shared/config/routes'
import { cls } from 'shared/helpers/cls'
import { AppLink } from 'shared/ui/AppLink'

import s from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation('main')

	return (
		<div className={cls(s.Navbar, className)}>
			<div>{t('main:logo')}</div>
			<div className={s.links}>
				<AppLink to={RoutePath[AppRoutes.HOME]}>{t('main:navbar.home')}</AppLink>
				<AppLink to={RoutePath[AppRoutes.ABOUT]}>{t('main:navbar.about')}</AppLink>
			</div>
		</div>
	)
}
