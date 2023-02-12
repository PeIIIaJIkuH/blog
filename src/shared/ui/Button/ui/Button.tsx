import { type ButtonHTMLAttributes, type FC, type PropsWithChildren } from 'react'

import { cls } from 'shared/helpers/cls'

import s from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: 'clear'
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
	const { className, theme, children, ...rest } = props

	return (
		<button className={cls(s.Button, className, s[theme ?? ''])} {...rest} data-testid='button'>
			{children}
		</button>
	)
}
