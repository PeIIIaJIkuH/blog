import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

export const NotFoundPage: FC = () => {
	const { t } = useTranslation()

	return (
		<div>
			<h1>
				{t('notFoundPage.title')}
			</h1>
		</div>
	)
}
