import { type CSSProperties, useMemo, type FC, memo } from 'react'

import { cls } from 'shared/helpers/cls'

import s from './typography.module.scss'

interface TypographyProps {
	className?: string
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
	color?: 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
	weight?: CSSProperties['fontWeight']
	align?: 'left' | 'center' | 'right'
	transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize'
	decoration?: 'none' | 'underline' | 'line-through'
	as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	text?: string | null
}

export const Typography: FC<TypographyProps> = memo(
	({
		className,
		size = 'md',
		color = 'default',
		weight = 'normal',
		align = 'left',
		transform = 'none',
		decoration = 'none',
		as = 'p',
		text,
	}) => {
		const Component = as ?? 'p'
		const styles: CSSProperties = useMemo(() => ({ fontWeight: weight }), [weight])

		return (
			<Component
				className={cls(
					s.typography,
					className,
					s[`size-${size}`],
					s[`color-${color}`],
					s[`align-${align}`],
					s[`transform-${transform}`],
					s[`decoration-${decoration}`],
				)}
				style={styles}
				data-testid='typography'
			>
				{text}
			</Component>
		)
	},
)
