import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

export const HomePage: FC = () => {
	const { t } = useTranslation('home')

	return (
		<div>
			<h1>{t('home:title')}</h1>
		</div>
	)
}
