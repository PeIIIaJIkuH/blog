import {
	type FC,
	memo,
	type MouseEventHandler,
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
	isOpen?: boolean
	onClose?: () => void
}

export const Modal: FC<PropsWithChildren<ModalProps>> = memo(({ className, isOpen, onClose, children }) => {
	const [isClosing, setIsClosing] = useState(false)
	const timerRef = useRef<number>()

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

	const onOverlayClick: MouseEventHandler<HTMLDivElement> = useCallback(
		(e) => {
			if (e.target === e.currentTarget) {
				if (isClosing) return
				close()
			}
		},
		[close, isClosing],
	)

	useEffect(() => {
		document.addEventListener('keydown', closeOnEscape)

		return () => {
			document.removeEventListener('keydown', closeOnEscape)
		}
	}, [closeOnEscape])

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
			<div className={cls(s.modal, className, isClosing && s.closing)} onClick={onOverlayClick} data-testid='wrapper'>
				<div className={s.content}>{children}</div>
			</div>
		</Portal>
	)
})
