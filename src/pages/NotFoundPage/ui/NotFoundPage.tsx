import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

export const NotFoundPage: FC = () => {
	const { t } = useTranslation()

	return (
		<div>
			<h1>{t('main:notFound.title')}</h1>
		</div>
	)
}
