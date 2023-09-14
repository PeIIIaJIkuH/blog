import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { cls } from 'shared/helpers/cls'

interface ArticleDetailsProps {
	className?: string
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo(({ className }) => {
	const { t } = useTranslation('article-details')

	return (
		<div className={cls(className)}>
			<h1>{t('title')}</h1>
		</div>
	)
})
