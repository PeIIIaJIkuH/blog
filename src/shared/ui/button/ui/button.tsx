import { type ButtonHTMLAttributes, type FC, type PropsWithChildren } from 'react'

import { cls } from 'shared/helpers/cls'

import s from './button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	variant?: 'default' | 'outline' | 'filled'
	size?: 'small' | 'medium' | 'large'
	radius?: 'small' | 'medium' | 'large'
	color?: 'primary' | 'success' | 'danger' | 'warning' | 'info'
	uppercase?: boolean
	loading?: boolean
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
	className,
	variant = 'default',
	size = 'medium',
	radius = 'medium',
	color = 'primary',
	uppercase = false,
	loading = false,
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
				uppercase && s.uppercase,
				loading && s.loading,
			)}
			data-testid='button'
			{...rest}
		>
			{children}
			{loading && (
				<div className={s.loaderWrapper} data-testid='loader'>
					<span className={s.loader} />
				</div>
			)}
		</button>
	)
}
