import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

export const NotFound: FC = () => {
	const { t } = useTranslation()

	return (
		<div>
			<h1>{t('not_found_page.title')}</h1>
		</div>
	)
}
