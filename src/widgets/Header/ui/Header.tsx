import { type FC } from 'react'

import BlogIcon from 'shared/assets/icons/blog.svg'
import { cls } from 'shared/helpers/cls'
import { AppLink } from 'shared/ui/AppLink'

import s from './Header.module.scss'

interface HeaderProps {
	className?: string
}

export const Header: FC<HeaderProps> = ({ className }) => {
	return (
		<div className={cls(s.Header, className)}>
			<AppLink to='home' className={s.logo}>
				<BlogIcon />
			</AppLink>
		</div>
	)
}
