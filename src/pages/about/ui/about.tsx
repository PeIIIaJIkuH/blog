import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import s from './about.module.scss'

export const AboutPage: FC = memo(() => {
	const { t } = useTranslation('about')

	return (
		<div className={s.about}>
			<h1>{t('title')}</h1>
		</div>
	)
})
