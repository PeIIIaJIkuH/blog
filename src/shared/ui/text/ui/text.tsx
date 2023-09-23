import { memo, type FC, type CSSProperties, useMemo } from 'react'

import { cls } from 'shared/helpers/cls'

import s from './text.module.scss'

interface TextProps {
	className?: string
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	color?: 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info'
	weight?: CSSProperties['fontWeight']
	align?: 'left' | 'center' | 'right'
	transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize'
	decoration?: 'none' | 'underline' | 'line-through'
	component?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	text?: string | null
}

export const Text: FC<TextProps> = memo(
	({
		className,
		size = 'md',
		color = 'default',
		weight = 'normal',
		align = 'left',
		transform = 'none',
		decoration = 'none',
		component: Component = 'p',
		text,
	}) => {
		const styles: CSSProperties = useMemo(() => ({ fontWeight: weight }), [weight])

		return (
			<Component
				className={cls(
					s.text,
					className,
					s[`size-${size}`],
					s[`color-${color}`],
					s[`align-${align}`],
					s[`transform-${transform}`],
					s[`decoration-${decoration}`],
				)}
				style={styles}
				data-testid='text'
			>
				{text}
			</Component>
		)
	},
)
