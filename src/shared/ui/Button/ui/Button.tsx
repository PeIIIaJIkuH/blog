import {ButtonHTMLAttributes, FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'

import s from './Button.module.scss'

export enum ButtonTheme {
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
	const {className, theme = ButtonTheme.CLEAR, children, ...rest} = props

	return (
		<button className={classNames(s.Button, {}, [className, s[theme]])} {...rest}>
			{children}
		</button>
	)
}
