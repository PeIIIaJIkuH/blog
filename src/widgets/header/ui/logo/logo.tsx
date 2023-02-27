import { type FC, memo } from 'react'

import BlogIcon from 'shared/assets/icons/blog.svg'
import { cls } from 'shared/helpers/cls'
import { AppLink } from 'shared/ui/app-link'

import s from './logo.module.scss'

interface LogoProps {
	className?: string
}

export const Logo: FC<LogoProps> = memo(({ className }) => {
	return (
		<AppLink to='home' className={cls(s.logo, className)}>
			<BlogIcon />
		</AppLink>
	)
})
