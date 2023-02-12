import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { cls } from 'shared/helpers/cls'
import { Button } from 'shared/ui/Button'

import s from './PageError.module.scss'

interface PageErrorProps {
	className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
	const { t } = useTranslation()

	const refreshPage = () => {
		window.location.reload()
	}

	return (
		<div className={cls(s.PageError, className)}>
			<p>{t('main:error.message')}</p>
			<Button onClick={refreshPage}>{t('main:error.refreshButton')}</Button>
		</div>
	)
}
