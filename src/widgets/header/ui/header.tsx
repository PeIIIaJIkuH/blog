import { type FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { LoginModal } from 'features/auth-by-username'
import BlogIcon from 'shared/assets/icons/blog.svg'
import { cls } from 'shared/helpers/cls'
import { AppLink } from 'shared/ui/app-link'
import { Button } from 'shared/ui/button'

import s from './header.module.scss'

interface HeaderProps {
	className?: string
}

export const Header: FC<HeaderProps> = ({ className }) => {
	const { t } = useTranslation()
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = useCallback(() => {
		setIsModalOpen(true)
	}, [])

	const closeModal = useCallback(() => {
		setIsModalOpen(false)
	}, [])

	return (
		<div className={cls(s.Header, className)}>
			<AppLink to='home' className={s.logo}>
				<BlogIcon />
			</AppLink>
			<LoginModal isOpen={isModalOpen} onClose={closeModal} />
			<Button onClick={openModal} className={s.loginButton}>
				{t('header.login')}
			</Button>
		</div>
	)
}
