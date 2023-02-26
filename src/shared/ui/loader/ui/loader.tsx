import { type FC } from 'react'

import { cls } from 'shared/helpers/cls'

import s from './loader.module.scss'

interface LoaderProps {
	className?: string
	size?: 'small' | 'medium' | 'large'
}

export const Loader: FC<LoaderProps> = ({ className, size = 'medium' }) => {
	return <span className={cls(s.loader, className, s[`size-${size}`])} data-testid='loader' />
}
