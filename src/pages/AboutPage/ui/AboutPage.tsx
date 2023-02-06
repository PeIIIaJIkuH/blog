import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

export const AboutPage: FC = () => {
	const { t } = useTranslation('aboutPage')

	return (
		<div>
			<h1>
				{t('title')}
			</h1>
		</div>
	)
}
