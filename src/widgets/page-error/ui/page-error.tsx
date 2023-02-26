import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { cls } from 'shared/helpers/cls'
import { Button } from 'shared/ui/button'

import s from './page-error.module.scss'

interface PageErrorProps {
	className?: string
}

export const PageError: FC<PageErrorProps> = memo(({ className }) => {
	const { t } = useTranslation()

	const refreshPage = useCallback(() => {
		window.location.reload()
	}, [])

	return (
		<div className={cls(s.pageError, className)}>
			<p>{t('page_error.message')}</p>
			<Button onClick={refreshPage}>{t('page_error.refreshButton')}</Button>
		</div>
	)
})
