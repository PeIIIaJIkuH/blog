import { type FC, type PropsWithChildren, useMemo } from 'react'
import { Link, type LinkProps, useLocation } from 'react-router-dom'

import { type AppRoute, RoutePath } from 'shared/config/routes'
import { cls } from 'shared/helpers/cls'

import s from './app-link.module.scss'

interface AppLinkProps extends LinkProps {
	className?: string
	to: AppRoute
	nav?: boolean
	withoutActive?: boolean
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = ({
	to,
	className,
	nav,
	withoutActive,
	children,
	...rest
}) => {
	const link = useMemo(() => {
		return RoutePath[to]
	}, [to])
	const { pathname } = useLocation()
	const isActive = useMemo(() => {
		if (withoutActive) return false
		if (link !== '/') return pathname.startsWith(link)
		return pathname === link
	}, [withoutActive, link, pathname])

	return (
		<Link to={link} className={cls(s.appLink, className, isActive && s.active)} {...rest}>
			{children}
		</Link>
	)
}
