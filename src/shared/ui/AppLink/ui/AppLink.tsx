import { type FC, type PropsWithChildren } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

import { cls } from '@shared/helpers/cls'

import s from './AppLink.module.scss'

interface AppLinkProps extends LinkProps {
	className?: string
	theme?: 'primary' | 'secondary'
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = (props) => {
	const { className, theme = 'primary', children, ...rest } = props

	return (
		<Link className={cls(s.AppLink, className, s[theme])} {...rest}>
			{children}
		</Link>
	)
}
