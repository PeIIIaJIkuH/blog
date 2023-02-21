import { type FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import BlogIcon from 'shared/assets/icons/blog.svg'
import { cls } from 'shared/helpers/cls'
import { AppLink } from 'shared/ui/app-link'
import { Button } from 'shared/ui/button'
import { Modal } from 'shared/ui/modal'

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
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				Auth modal
			</Modal>
			<Button onClick={openModal} className={s.loginButton}>
				{t('header.login')}
			</Button>
		</div>
	)
}
