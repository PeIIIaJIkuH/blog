import { type FC, type PropsWithChildren, useMemo } from 'react'
import { Link, type LinkProps, useLocation } from 'react-router-dom'

import { cls } from 'shared/helpers/cls'

import s from './app-link.module.scss'

interface AppLinkProps extends LinkProps {
	className?: string
	to: string
	nav?: boolean
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = ({ to, className, nav, children, ...rest }) => {
	const { pathname } = useLocation()
	const isActive = useMemo(() => {
		if (!nav) return false
		if (to !== '/') return pathname.startsWith(to)
		return pathname === to
	}, [to, nav, pathname])

	return (
		<Link to={to} className={cls(s.appLink, className, isActive && s.active)} {...rest}>
			{children}
		</Link>
	)
}
