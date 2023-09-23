import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { cls } from 'shared/helpers/cls'
import { Button } from 'shared/ui/button'

import s from './page-error.module.scss'

interface PageErrorProps {
	className?: string
	message: string | null
	withRefreshButton?: boolean
	fullHeight?: boolean
}

export const PageError: FC<PageErrorProps> = memo(({ className, message, withRefreshButton, fullHeight }) => {
	const { t } = useTranslation()

	const refreshPage = useCallback(() => {
		window.location.reload()
	}, [])

	return (
		<div className={cls(s.pageError, className, fullHeight && s.fullHeight)}>
			<p>{message}</p>
			{withRefreshButton && <Button onClick={refreshPage} text={t('page_error.refresh_button')} />}
		</div>
	)
})
