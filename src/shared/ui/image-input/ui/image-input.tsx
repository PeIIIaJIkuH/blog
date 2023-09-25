import { type ChangeEventHandler, type FC, memo, useCallback, useMemo, useRef } from 'react'

import { cls } from 'shared/helpers/cls'
import { Icon } from 'shared/ui/icon'

import s from './image-input.module.scss'

interface ImageInputProps {
	className?: string
	image?: string | null
	updateImage?: (file: File) => void
	variant: 'changeButton' | 'overlay'
}

export const ImageInput: FC<ImageInputProps> = memo(({ className, image, updateImage, variant }) => {
	const ref = useRef<HTMLInputElement>(null)

	const onEditClick = useCallback(() => {
		ref.current?.click()
	}, [])

	const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
		(e) => {
			const file = e.target.files?.[0]
			if (file) {
				updateImage?.(file)
			}
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
		<div className={cls(s.imageInput, className)} style={style} data-testid='wrapper'>
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
			<input type='file' className={s.input} accept='image/*' onChange={onChange} ref={ref} data-testid='file-input' />
		</div>
	)
})
