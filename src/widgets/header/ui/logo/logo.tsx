import { type FC, memo } from 'react'

import { AppRoute, RoutePath } from 'shared/config/routes'
import { cls } from 'shared/helpers/cls'
import { AppLink } from 'shared/ui/app-link'
import { Icon } from 'shared/ui/icon'

import s from './logo.module.scss'

interface LogoProps {
	className?: string
}

export const Logo: FC<LogoProps> = memo(({ className }) => {
	return (
		<AppLink to={RoutePath[AppRoute.HOME]} className={cls(s.logo, className)}>
			<Icon type='blog' size={40} />
		</AppLink>
	)
})
