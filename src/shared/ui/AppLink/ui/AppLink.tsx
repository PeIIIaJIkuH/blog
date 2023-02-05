import {FC} from 'react'
import {Link, LinkProps} from 'react-router-dom'

import {cls} from '@shared/helpers/cls'

import s from './AppLink.module.scss'

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
	className?: string
	theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
	const {className, theme = AppLinkTheme.PRIMARY, children, ...rest} = props

	return (
		<Link className={cls(s.AppLink, className, s[theme])} {...rest}>
			{children}
		</Link>
	)
}
