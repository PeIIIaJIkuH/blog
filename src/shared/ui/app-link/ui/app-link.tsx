import { type FC, type PropsWithChildren, useMemo } from 'react'
import { Link, type LinkProps, useLocation } from 'react-router-dom'

import { type IAppRoutes, RoutePath } from 'shared/config/routes'
import { cls } from 'shared/helpers/cls'

import s from './app-link.module.scss'

interface AppLinkProps extends LinkProps {
	className?: string
	to: Exclude<IAppRoutes, 'notFound'>
	nav?: boolean
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = (props) => {
	const { to, className, nav, children, ...rest } = props
	const link = useMemo(() => {
		return RoutePath[to]
	}, [to])
	const { pathname } = useLocation()
	const isActive = useMemo(() => {
		return pathname === link
	}, [pathname, link])

	return (
		<Link to={link} className={cls(s.appLink, className, nav && isActive && s.active)} {...rest}>
			{children}
		</Link>
	)
}
