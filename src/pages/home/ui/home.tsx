import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

export const Home: FC = memo(() => {
	const { t } = useTranslation('home')

	return (
		<div>
			<h1>{t('title')}</h1>
		</div>
	)
})
