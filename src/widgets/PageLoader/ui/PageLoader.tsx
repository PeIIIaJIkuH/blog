import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { cls } from '@shared/helpers/cls'

import s from './PageLoader.module.scss'

interface PageLoaderProps {
	className?: string
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
	const { t } = useTranslation()

	return <div className={cls(s.PageLoader, className)}>{t('loading')}</div>
}
