import { type FC, Suspense, useEffect } from 'react'

import { useAppDispatch } from 'app/store'
import { Loader } from 'shared/ui/loader'
import { Modal } from 'shared/ui/modal'

import { loginActions } from '../../model/login-slice'
import { LoginFormLazy } from '../login-form/login-form.lazy'

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
		<Modal className={className} isOpen={isOpen} onClose={onClose}>
			<Suspense fallback={<Loader />}>
				<LoginFormLazy onSuccess={onClose} />
			</Suspense>
		</Modal>
	)
}
