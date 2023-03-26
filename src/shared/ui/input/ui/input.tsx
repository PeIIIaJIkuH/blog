import {
	type ChangeEvent,
	type FC,
	type InputHTMLAttributes,
	memo,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'

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
	type?: 'text' | 'password' | 'number'
}

export const Input: FC<InputProps> = memo(
	({ className, value, onChange, type = 'text', autoFocus, clearable, ...rest }) => {
		const ref = useRef<HTMLInputElement>(null)
		const [newType, setNewType] = useState(type)

		useEffect(() => {
			if (autoFocus) {
				ref.current?.focus()
			}
		}, [autoFocus])

		useEffect(() => {
			if (rest.readOnly) {
				ref.current?.blur()
			}
		}, [rest.readOnly])

		const handleChange = useCallback(
			(e: ChangeEvent<HTMLInputElement>) => {
				onChange?.(e.target.value)
			},
			[onChange],
		)

		const handleClear = useCallback(() => {
			onChange?.('')
		}, [onChange])

		const handleShowPassword = useCallback(() => {
			setNewType((prev) => (prev === 'password' ? 'text' : 'password'))
		}, [])

		const ShowPasswordButton = useCallback(
			() => (
				<button
					className={s.showPassword}
					onClick={handleShowPassword}
					data-testid='show-password-button'
					type='button'
					tabIndex={-1}
				>
					{newType === 'password' ? <IconEye /> : <IconEyeOff />}
				</button>
			),
			[handleShowPassword, newType],
		)

		return (
			<div className={cls(s.wrapper, className)} data-testid='wrapper'>
				<input
					className={cls(s.input)}
					value={value}
					onChange={handleChange}
					type={newType}
					inputMode={type === 'number' ? 'numeric' : undefined}
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
							tabIndex={-1}
							type='button'
							data-testid='clear-button'
						>
							<IconX />
						</button>
					)}
				</div>
				{(type === 'password' || newType === 'password') && <ShowPasswordButton />}
			</div>
		)
	},
)
