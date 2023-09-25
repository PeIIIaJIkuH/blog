import { type ChangeEventHandler, type FC, memo, useCallback, useMemo, useRef, useState } from 'react'

import { cls } from 'shared/helpers/cls'
import { Icon } from 'shared/ui/icon'

import s from './image-input.module.scss'

interface ImageInputProps {
	className?: string
	image?: string | null
	updateImage?: (file: File) => Promise<void>
	variant: 'changeButton' | 'overlay'
	readOnly?: boolean
}

export const ImageInput: FC<ImageInputProps> = memo(({ className, image, updateImage, variant, readOnly }) => {
	const [isUpdating, setIsUpdating] = useState(false)
	const ref = useRef<HTMLInputElement>(null)

	const onEditClick = useCallback(() => {
		ref.current?.click()
	}, [])

	const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
		async (e) => {
			const file = e.target.files?.[0]
			setIsUpdating(true)
			if (file) {
				await updateImage?.(file)
			}
			setIsUpdating(false)
		},
		[updateImage],
	)

	const style = useMemo(
		() => ({
			background: image ? `url(${image}) no-repeat center / cover` : '#aaaaaa',
		}),
		[image],
	)

	return (
		<div className={cls(s.imageInput, className, isUpdating && s.updating)} style={style} data-testid='wrapper'>
			{!readOnly && (
				<>
					<div className={s.inner}>
						{variant === 'changeButton' && (
							<button className={s.changeButton} onClick={onEditClick} data-testid='change-button'>
								<Icon type='pencil' />
							</button>
						)}
						{variant === 'overlay' && (
							<div className={s.overlay} onClick={onEditClick}>
								<Icon type='pencil' />
							</div>
						)}
					</div>
					<input
						type='file'
						className={s.input}
						accept='image/*'
						onChange={onChange}
						ref={ref}
						data-testid='file-input'
					/>
				</>
			)}
		</div>
	)
})
