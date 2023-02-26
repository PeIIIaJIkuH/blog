import { type FC, memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from 'app/store'
import { userActions } from 'entities/user'
import { getAuth } from 'entities/user/model/selectors'
import { LoginModal } from 'features/auth-by-username'
import BlogIcon from 'shared/assets/icons/blog.svg'
import { cls } from 'shared/helpers/cls'
import { AppLink } from 'shared/ui/app-link'
import { Button } from 'shared/ui/button'

import s from './header.module.scss'

interface HeaderProps {
	className?: string
}

export const Header: FC<HeaderProps> = memo(({ className }) => {
	const { t } = useTranslation()
	const [isModalOpen, setIsModalOpen] = useState(false)
	const auth = useAppSelector(getAuth)
	const dispatch = useAppDispatch()

	const openModal = useCallback(() => {
		setIsModalOpen(true)
	}, [])

	const closeModal = useCallback(() => {
		setIsModalOpen(false)
	}, [])

	const onLogout = useCallback(() => {
		dispatch(userActions.setUser(null))
	}, [dispatch])

	return (
		<div className={cls(s.Header, className)}>
			<AppLink to='home' className={s.logo}>
				<BlogIcon />
			</AppLink>
			{auth ? (
				<Button onClick={onLogout} className={s.button}>
					{t('header.logout')}
				</Button>
			) : (
				<>
					<LoginModal isOpen={isModalOpen} onClose={closeModal} />
					<Button onClick={openModal} className={s.button}>
						{t('header.login')}
					</Button>
				</>
			)}
		</div>
	)
})
