import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { cls } from 'shared/helpers/cls'

interface ArticlesProps {
	className?: string
}

export const Articles: FC<ArticlesProps> = memo(({ className }) => {
	const { t } = useTranslation('articles')

	return (
		<div className={cls(className)}>
			<h1>{t('title')}</h1>
		</div>
	)
})
