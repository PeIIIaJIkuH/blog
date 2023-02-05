import {FC} from 'react'
import {Link, LinkProps} from 'react-router-dom'
import {classNames} from 'shared/lib/classNames/classNames'
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
		<Link className={classNames(s.AppLink, {}, [className, s[theme]])} {...rest}>
			{children}
		</Link>
	)
}
