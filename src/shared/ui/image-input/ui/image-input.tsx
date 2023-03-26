import { type ChangeEventHandler, type FC, useCallback, useMemo, useRef } from 'react'

import PencilIcon from 'shared/assets/icons/pencil.svg'
import { cls } from 'shared/helpers/cls'
import { fileToBase64 } from 'shared/helpers/file-to-base64'

import s from './image-input.module.scss'

interface ImageInputProps {
	className?: string
	image?: string | null
	updateImage?: (url: string) => void
	variant: 'changeButton' | 'overlay'
}

export const ImageInput: FC<ImageInputProps> = ({ className, image, updateImage, variant }) => {
	const ref = useRef<HTMLInputElement>(null)

	const onEditClick = useCallback(() => {
		ref.current?.click()
	}, [])

	const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
		async (e) => {
			const file = e.target.files?.[0]
			if (file) {
				updateImage?.(await fileToBase64(file))
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
						<PencilIcon />
					</button>
				)}
				{variant === 'overlay' && (
					<div className={s.overlay} onClick={onEditClick}>
						<PencilIcon />
					</div>
				)}
			</div>
			<input type='file' className={s.input} accept='image/*' onChange={onChange} ref={ref} data-testid='file-input' />
		</div>
	)
}
