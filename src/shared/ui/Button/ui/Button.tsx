import { type ButtonHTMLAttributes, type FC, type PropsWithChildren } from 'react'

import { cls } from 'shared/helpers/cls'

import s from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	variant?: 'clear' | 'outlined' | 'filled'
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
	const { className, variant, children, ...rest } = props

	return (
		<button className={cls(s.Button, className, s[variant ?? ''])} {...rest} data-testid='button'>
			{children}
		</button>
	)
}
