import { type ChangeEvent, type FC, type InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'

import IconEyeOff from 'shared/assets/icons/eye-off.svg'
import IconEye from 'shared/assets/icons/eye.svg'
import IconX from 'shared/assets/icons/x.svg'
import { cls } from 'shared/helpers/cls'

import s from './input.module.scss'

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
	className?: string
	value?: string
	onChange?: (value: string) => void
	autoFocus?: boolean
	clearable?: boolean
	type?: 'text' | 'password'
}

export const Input: FC<InputProps> = memo((props) => {
	const { className, value, onChange, type = 'text', autoFocus, clearable, ...rest } = props
	const ref = useRef<HTMLInputElement>(null)
	const [newType, setNewType] = useState(type)

	useEffect(() => {
		if (autoFocus) {
			ref.current?.focus()
		}
	}, [autoFocus])

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
	}

	const handleClear = () => {
		onChange?.('')
	}

	const handleShowPassword = () => {
		setNewType((prev) => (prev === 'password' ? 'text' : 'password'))
	}

	return (
		<div className={cls(s.wrapper, className)} data-testid='wrapper'>
			<input
				className={cls(s.input, type === 'password' && s.withRightPadding)}
				value={value}
				onChange={handleChange}
				type={newType}
				ref={ref}
				autoComplete='do-not-autofill'
				data-testid='input'
				{...rest}
			/>
			<div className={s.actions}>
				{clearable && value && (
					<button
						className={cls(s.clearButton, type === 'password' && s.withRight)}
						onClick={handleClear}
						data-testid='clear-button'
					>
						<IconX />
					</button>
				)}
			</div>
			{(type === 'password' || newType === 'password') && (
				<button className={s.showPassword} onClick={handleShowPassword} data-testid='show-password-button'>
					{newType === 'password' ? <IconEye /> : <IconEyeOff />}
				</button>
			)}
		</div>
	)
})