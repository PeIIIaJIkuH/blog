import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { cls } from 'shared/helpers/cls'
import { Button } from 'shared/ui/button'

import s from './page-error.module.scss'

interface PageErrorProps {
	className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
	const { t } = useTranslation()

	const refreshPage = () => {
		window.location.reload()
	}

	return (
		<div className={cls(s.pageError, className)}>
			<p>{t('error.message')}</p>
			<Button onClick={refreshPage}>{t('error.refreshButton')}</Button>
		</div>
	)
}
