import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

interface ArticlesProps {
	className?: string
}

export const Articles: FC<ArticlesProps> = memo(({ className }) => {
	const { t } = useTranslation('articles')

	return (
		<div className={className}>
			<h1>{t('title')}</h1>
		</div>
	)
})
