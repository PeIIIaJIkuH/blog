import { type FC, type PropsWithChildren } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

import { type IAppRoutes, RoutePath } from 'shared/config/routes'
import { cls } from 'shared/helpers/cls'

import s from './AppLink.module.scss'

interface AppLinkProps extends LinkProps {
	className?: string
	to: Exclude<IAppRoutes, 'notFound'>
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = (props) => {
	const { to, className, children, ...rest } = props

	return (
		<Link to={RoutePath[to]} className={cls(s.AppLink, className)} {...rest}>
			{children}
		</Link>
	)
}
