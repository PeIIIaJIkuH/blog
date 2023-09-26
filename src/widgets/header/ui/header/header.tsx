import { type FC, memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from 'app/store'
import { getUserUser, userActions } from 'entities/user'
import { LoginModal } from 'features/auth-by-username'
import { cls } from 'shared/helpers/cls'
import { Button } from 'shared/ui/button'

import { Logo } from '../logo/logo'

import s from './header.module.scss'

interface HeaderProps {
	className?: string
}

export const Header: FC<HeaderProps> = memo(({ className }) => {
	const { t } = useTranslation()
	const [isModalOpen, setIsModalOpen] = useState(false)
	const auth = useAppSelector(getUserUser)
	const dispatch = useAppDispatch()

	const openModal = useCallback(() => {
		setIsModalOpen(true)
	}, [])

	const closeModal = useCallback(() => {
		setIsModalOpen(false)
	}, [])

	const logout = useCallback(() => {
		dispatch(userActions.setUser(null))
	}, [dispatch])

	return (
		<div className={cls(s.Header, className)}>
			<Logo />
			{auth ? (
				<Button onClick={logout} className={s.button} text={t('header.logout')} />
			) : (
				<Button onClick={openModal} className={s.button} text={t('header.login')} />
			)}
			<LoginModal isOpen={isModalOpen} onClose={closeModal} />
		</div>
	)
})
