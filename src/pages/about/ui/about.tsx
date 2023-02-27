import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

export const About: FC = () => {
	const { t } = useTranslation('about')

	return (
		<div>
			<h1>{t('title')}</h1>
		</div>
	)
}
