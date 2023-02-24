import { type FC } from 'react'

import { cls } from 'shared/helpers/cls'
import { Modal } from 'shared/ui/modal'

import { LoginForm } from './login-form/login-form'

interface LoginModalProps {
	className?: string
	isOpen: boolean
	onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => {
	return (
		<Modal className={cls(className)} isOpen={isOpen} onClose={onClose}>
			<LoginForm />
		</Modal>
	)
}
