import {
	type FC,
	type MouseEventHandler,
	type PropsWithChildren,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'

import { cls } from 'shared/helpers/cls'
import { useTheme } from 'shared/providers/theme'
import { Portal } from 'shared/ui/portal'

import s from './modal.module.scss'

interface ModalProps {
	className?: string
	isOpen?: boolean
	onClose?: () => void
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ className, isOpen, onClose, children }) => {
	const { theme } = useTheme()
	const [isClosing, setIsClosing] = useState(false)
	const timerRef = useRef<number>()

	const closeOnEscape = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose?.()
				setIsClosing(false)
			}
		},
		[onClose],
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

	const onOverlayClick: MouseEventHandler<HTMLDivElement> = (e) => {
		if (e.target === e.currentTarget) {
			if (isClosing) return
			setIsClosing(true)
			timerRef.current = window.setTimeout(() => {
				onClose?.()
				setIsClosing(false)
			}, 200)
		}
	}

	return (
		<Portal wrapperId='modal-portal-wrapper'>
			<div className={cls(s.modal, className, s[theme], isClosing && s.closing)} onClick={onOverlayClick}>
				<div className={s.content}>{children}</div>
			</div>
		</Portal>
	)
}
