import { type FC, useEffect } from 'react'

import { useAppDispatch } from 'app/store/hooks'
import { loginActions } from 'features/auth-by-username/model/login-slice'
import { cls } from 'shared/helpers/cls'
import { Modal } from 'shared/ui/modal'

import { LoginForm } from '../login-form/login-form'

interface LoginModalProps {
	className?: string
	isOpen: boolean
	onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (!isOpen) {
			dispatch(loginActions.reset())
		}
	}, [dispatch, isOpen])

	return (
		<Modal className={cls(className)} isOpen={isOpen} onClose={onClose}>
			<LoginForm onSubmit={onClose} />
		</Modal>
	)
}
