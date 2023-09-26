import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import s from './home.module.scss'

export const HomePage: FC = memo(() => {
	const { t } = useTranslation('home')

	return (
		<div className={s.homePage}>
			<h1>{t('title')}</h1>
		</div>
	)
})
