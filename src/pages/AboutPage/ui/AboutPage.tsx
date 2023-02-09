import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

export const AboutPage: FC = () => {
	const { t } = useTranslation('about')

	return (
		<div>
			<h1>{t('about:title')}</h1>
		</div>
	)
}
