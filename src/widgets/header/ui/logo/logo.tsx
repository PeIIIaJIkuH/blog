import { type FC, memo } from 'react'

import BlogIcon from 'shared/assets/icons/blog.svg'
import { AppRoute } from 'shared/config/routes'
import { cls } from 'shared/helpers/cls'
import { AppLink } from 'shared/ui/app-link'

import s from './logo.module.scss'

interface LogoProps {
	className?: string
}

export const Logo: FC<LogoProps> = memo(({ className }) => {
	return (
		<AppLink to={AppRoute.HOME} className={cls(s.logo, className)}>
			<BlogIcon />
		</AppLink>
	)
})
