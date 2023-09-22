import { type FC, memo, type CSSProperties, type HTMLAttributes, useMemo } from 'react'

import { cls } from 'shared/helpers/cls'

import s from './skeleton.module.scss'

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
	className?: string
	width?: CSSProperties['width']
	height?: CSSProperties['height']
	radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none'
	circle?: boolean
	animate?: boolean
}

export const Skeleton: FC<SkeletonProps> = memo(
	({ className, width = '100%', height = 1, radius = 'md', circle, animate = true, ...rest }) => {
		const style = useMemo(() => {
			let h = height
			if (typeof h === 'number') h = `${h}rem`
			let w = width
			if (typeof w === 'number') w = `${w}rem`
			if (circle) return { width: h, height: h, borderRadius: '50%' }
			return { width: w, height: h }
		}, [circle, height, width])

		return (
			<div
				className={cls(s.skeleton, className, s[`radius-${radius}`])}
				data-animate={animate ? true : undefined}
				style={style}
				data-testid='skeleton'
				{...rest}
			/>
		)
	},
)
