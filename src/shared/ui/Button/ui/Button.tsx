import { type ButtonHTMLAttributes, type FC, type PropsWithChildren } from 'react'

import { cls } from 'shared/helpers/cls'

import s from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	variant?: 'default' | 'outline' | 'filled'
	size?: 'small' | 'medium' | 'large'
	radius?: 'small' | 'medium' | 'large'
	color?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger' | 'warning' | 'info'
	uppercase?: boolean
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
	const {
		className,
		variant = 'default',
		size = 'medium',
		radius = 'medium',
		color = 'primary',
		uppercase = false,
		children,
		...rest
	} = props

	return (
		<button
			className={cls(
				s.Button,
				className,
				s[`variant-${variant}`],
				s[`size-${size}`],
				s[`radius-${radius}`],
				s[`color-${color}`],
				uppercase && s.uppercase,
			)}
			data-testid='button'
			{...rest}
		>
			{children}
		</button>
	)
}
