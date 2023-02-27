import { type FC, memo, type PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react'

import { cls } from 'shared/helpers/cls'
import { Portal } from 'shared/ui/portal'

import s from './modal.module.scss'

interface ModalProps {
	className?: string
	isOpen?: boolean
	onClose?: () => void
}

export const Modal: FC<PropsWithChildren<ModalProps>> = memo(({ className, isOpen, onClose, children }) => {
	const [isClosing, setIsClosing] = useState(false)
	const timerRef = useRef<number>()
	const startTarget = useRef<EventTarget | null>(null)
	const endTarget = useRef<EventTarget | null>(null)
	const overlayRef = useRef<HTMLDivElement>(null)

	const close = useCallback(() => {
		setIsClosing(true)
		timerRef.current = window.setTimeout(() => {
			onClose?.()
			setIsClosing(false)
		}, 200)
	}, [onClose])

	const closeOnEscape = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				close()
			}
		},
		[close],
	)

	const onPointerDown = useCallback((e: MouseEvent) => {
		startTarget.current = e.target
		endTarget.current = null
	}, [])

	const onPointerUp = useCallback(
		(e: MouseEvent) => {
			endTarget.current = e.target
			if (endTarget.current === startTarget.current && endTarget.current === overlayRef.current) {
				if (isClosing) return
				close()
			}
		},
		[close, isClosing],
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

	useEffect(() => {
		return () => {
			if (timerRef.current) {
				window.clearTimeout(timerRef.current)
			}
		}
	}, [])

	if (!isOpen) return null

	return (
		<Portal wrapperId='modal-portal-wrapper'>
			<div className={cls(s.modal, className, isClosing && s.closing)} data-testid='wrapper' ref={overlayRef}>
				<div className={s.content}>{children}</div>
			</div>
		</Portal>
	)
})
