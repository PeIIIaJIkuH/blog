import { type FC, type KeyboardEventHandler, memo, useCallback, useEffect, useState } from 'react'

import { cls } from 'shared/helpers/cls'
import { Input } from 'shared/ui/input'
import { Typography } from 'shared/ui/typography'

import s from './editable-input.module.scss'

interface EditableInputProps {
	className?: string
	initialValue?: string
	onUpdate?: (value: string) => Promise<void>
	label?: string | null
	readOnly?: boolean
}

export const EditableInput: FC<EditableInputProps> = memo(({ className, initialValue, onUpdate, label, readOnly }) => {
	const [value, setValue] = useState(initialValue ?? '')
	const [isEditing, setIsEditing] = useState(false)
	const [isUpdating, setIsUpdating] = useState(false)

	useEffect(() => {
		setValue(initialValue ?? '')
	}, [initialValue])

	const onChange = useCallback((val: string) => {
		setValue(val)
	}, [])

	const onDoubleClick = useCallback(() => {
		setIsEditing(true)
	}, [])

	const reset = useCallback(() => {
		setIsEditing(false)
		if (isUpdating) return
		setValue(initialValue ?? '')
	}, [initialValue, isUpdating])

	const onKeydown: KeyboardEventHandler<HTMLInputElement> = useCallback(
		async (e) => {
			if (e.key === 'Enter') {
				setIsEditing(false)
				setIsUpdating(true)
				await onUpdate?.(value)
				setIsUpdating(false)
			} else if (e.key === 'Escape') {
				reset()
			}
		},
		[onUpdate, reset, value],
	)

	return (
		<div className={s.wrapper}>
			{label && <Typography as='span' className={s.label} text={label} weight={500} size='sm' />}
			<Input
				value={value}
				onChange={onChange}
				className={cls(s.editableInput, className)}
				onDoubleClick={onDoubleClick}
				onBlur={reset}
				onKeyDown={onKeydown}
				readOnly={!isEditing || readOnly}
				data-updating={isUpdating}
			/>
		</div>
	)
})
