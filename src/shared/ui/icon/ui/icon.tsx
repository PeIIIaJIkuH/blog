import { type FC, memo, type CSSProperties, useMemo } from 'react'

import { cls } from 'shared/helpers/cls'

import { icons, sizeMap } from '../lib/constants'
import { type IconType } from '../lib/types'

import s from './icon.module.scss'

interface IconProps {
	className?: string
	type: IconType
	color?: 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number
}

export const Icon: FC<IconProps> = memo(({ className, type, color = 'default', size = 'md' }) => {
	const IconComponent = icons[type]
	const styles: CSSProperties = useMemo(() => {
		if (typeof size === 'number') {
			return { width: size, height: size }
		}
		return { width: sizeMap[size], height: sizeMap[size] }
	}, [size])

	if (!IconComponent) {
		return null
	}

	return <IconComponent className={cls(className, s[`color-${color}`])} style={styles} role='img' />
})
