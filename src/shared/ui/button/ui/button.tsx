import { type ButtonHTMLAttributes, type FC, memo, type PropsWithChildren } from 'react'

import { cls } from 'shared/helpers/cls'

import s from './button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	text?: string | null
	variant?: 'default' | 'outline' | 'filled' | 'link'
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none'
	color?: 'primary' | 'success' | 'danger' | 'warning' | 'info'
	uppercase?: boolean
	loading?: boolean
	icon?: boolean
}

export const Button: FC<PropsWithChildren<ButtonProps>> = memo(
	({
		className,
		text,
		variant = 'default',
		size = 'md',
		radius = 'md',
		color = 'primary',
		uppercase,
		loading,
		icon,
		children,
		...rest
	}) => {
		return (
			<button
				className={cls(
					s.button,
					className,
					s[`variant-${variant}`],
					s[`size-${size}`],
					s[`radius-${radius}`],
					s[`color-${color}`],
					icon && s.icon,
					uppercase && s.uppercase,
					loading && s.loading,
				)}
				data-testid='button'
				{...rest}
			>
				{text ?? children}
				{loading && (
					<div className={s.loaderWrapper} data-testid='loader'>
						<span className={s.loader} />
					</div>
				)}
			</button>
		)
	},
)
