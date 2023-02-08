import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

export const MainPage: FC = () => {
	const { t } = useTranslation('homePage')

	return (
		<div>
			<h1>{t('title')}</h1>
		</div>
	)
}
