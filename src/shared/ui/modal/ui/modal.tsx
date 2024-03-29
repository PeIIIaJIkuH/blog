import {
	type AnimationEventHandler,
	type FC,
	type PropsWithChildren,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'

import { cls } from 'shared/helpers/cls'
import { Portal } from 'shared/ui/portal'

import { type Status } from '../model/types'

import s from './modal.module.scss'

interface ModalProps {
	className?: string
	isOpen: boolean
	onClose: () => void
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ className, isOpen, onClose, children }) => {
	const [status, setStatus] = useState<Status>('closed')
	const pointerStartTarget = useRef<EventTarget | null>(null)
	const pointerEndTarget = useRef<EventTarget | null>(null)
	const overlayRef = useRef<HTMLDivElement>(null)

	const closeOnEscape = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose()
			}
		},
		[onClose],
	)

	const onPointerDown = useCallback((e: MouseEvent) => {
		pointerStartTarget.current = e.target
		pointerEndTarget.current = null
	}, [])

	const onPointerUp = useCallback(
		(e: MouseEvent) => {
			pointerEndTarget.current = e.target
			if (pointerEndTarget.current === pointerStartTarget.current && pointerEndTarget.current === overlayRef.current) {
				onClose()
			}
		},
		[onClose],
	)

	const onAnimationEnd: AnimationEventHandler = useCallback((e) => {
		if (e.animationName === s.fadeIn) {
			setStatus('open')
		} else if (e.animationName === s.fadeOut) {
			setStatus('closed')
		}
	}, [])

	useEffect(() => {
		if (isOpen && status === 'closed') {
			setStatus('opening')
		}
		if (!isOpen && status === 'open') {
			setStatus('closing')
		}
	}, [isOpen, status])

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

	if (status === 'closed') {
		return null
	}

	return (
		<Portal wrapperId='modal-portal-wrapper'>
			<div
				className={cls(s.modal, className, {
					[s.opening]: status === 'opening',
					[s.open]: status === 'open',
					[s.closing]: status === 'closing',
				})}
				data-testid='wrapper'
				ref={overlayRef}
				onAnimationEnd={onAnimationEnd}
			>
				<div className={s.content}>{children}</div>
			</div>
		</Portal>
	)
}
