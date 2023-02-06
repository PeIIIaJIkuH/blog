import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { AppRoutes, ERoutes } from '@shared/config/routes'
import { cls } from '@shared/helpers/cls'
import { AppLink } from '@shared/ui/AppLink'

import s from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation()

	return (
		<div className={cls(s.Navbar, className)}>
			<div>Logo</div>
			<div className={s.links}>
				<AppLink to={AppRoutes[ERoutes.HOME]}>
					{t('navbar.home')}
				</AppLink>
				<AppLink to={AppRoutes[ERoutes.ABOUT]}>
					{t('navbar.about')}
				</AppLink>
			</div>
		</div>
	)
}
