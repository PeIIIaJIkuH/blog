import {
	type AnimationEventHandler,
	type FC,
	memo,
	type PropsWithChildren,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'

import { cls } from 'shared/helpers/cls'
import { Portal } from 'shared/ui/portal'

import s from './modal.module.scss'

interface ModalProps {
	className?: string
	isOpen: boolean
	onClose: () => void
}

export const Modal: FC<PropsWithChildren<ModalProps>> = memo(({ className, isOpen, onClose, children }) => {
	const [isClosing, setIsClosing] = useState(false)
	const pointerStartTarget = useRef<EventTarget | null>(null)
	const pointerEndTarget = useRef<EventTarget | null>(null)
	const overlayRef = useRef<HTMLDivElement>(null)

	const closeOnEscape = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			setIsClosing(true)
		}
	}, [])

	const onPointerDown = useCallback((e: MouseEvent) => {
		pointerStartTarget.current = e.target
		pointerEndTarget.current = null
	}, [])

	const onPointerUp = useCallback((e: MouseEvent) => {
		pointerEndTarget.current = e.target
		if (pointerEndTarget.current === pointerStartTarget.current && pointerEndTarget.current === overlayRef.current) {
			setIsClosing(true)
		}
	}, [])

	const onAnimationEnd: AnimationEventHandler<HTMLDivElement> = useCallback(
		(e) => {
			if (e.animationName === s.fadeOut) {
				setIsClosing(false)
				onClose()
			}
		},
		[onClose],
	)

	useEffect(() => {
		document.addEventListener('keydown', closeOnEscape)
		document.addEventListener('pointerdown', onPointerDown)
		document.addEventListener('pointerup', onPointerUp)

		return () => {
			document.removeEventListener('keydown', closeOnEscape)
			document.removeEventListener('pointerdown', onPointerDown)
			document.removeEventListener('pointerup', onPointerUp)
		}
	}, [closeOnEscape, onPointerDown, onPointerUp])

	if (!isOpen) return null

	return (
		<Portal wrapperId='modal-portal-wrapper'>
			<div
				className={cls(s.modal, className, isClosing ? s.closing : s.opening)}
				data-testid='wrapper'
				ref={overlayRef}
				onAnimationEnd={onAnimationEnd}
			>
				<div className={s.content}>{children}</div>
			</div>
		</Portal>
	)
})
