import {ButtonHTMLAttributes, FC} from 'react'

import {cls} from '@shared/helpers/cls'

import s from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: 'clear'
}

export const Button: FC<ButtonProps> = (props) => {
	const {className, theme = 'clear', children, ...rest} = props

	return (
		<button className={cls(s.Button, className, s[theme])} {...rest}>
			{children}
		</button>
	)
}
