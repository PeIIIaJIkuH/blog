import { type FC, memo, type CSSProperties, useMemo } from 'react'

import { cls } from 'shared/helpers/cls'
import { type RequiredOnlyOne } from 'shared/types'

import s from './image.module.scss'

interface ImageProps {
	className?: string
	src: string
	alt: string
	width: CSSProperties['width']
	height: CSSProperties['height']
	fit?: 'contain' | 'cover'
	radius?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	circle?: boolean
}

export const Image: FC<RequiredOnlyOne<ImageProps, 'width' | 'height'>> = memo(
	({ className, src, alt, width, height, fit = 'cover', radius = 'none', circle }) => {
		const styles = useMemo(() => {
			const w = width ?? height
			const h = height ?? width
			if (circle) return { width: h, height: h, borderRadius: '50%' }
			return { width: w, height: h }
		}, [height, width, circle])

		return (
			<img
				className={cls(s.image, className, s[`radius-${radius}`], s[`object-fit-${fit}`])}
				alt={alt}
				src={src}
				style={styles}
				loading='lazy'
				data-testid='image'
			/>
		)
	},
)
