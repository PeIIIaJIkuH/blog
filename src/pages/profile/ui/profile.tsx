import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { profileReducer } from 'entities/profile'
import { type ReducerMap, useLazyModuleLoading } from 'shared/hooks/use-lazy-module-loading'

const reducerMap: ReducerMap = {
	profile: profileReducer,
}

export const Profile: FC = () => {
	const { t } = useTranslation('profile')

	useLazyModuleLoading(reducerMap)

	return (
		<div>
			<h1>{t('title')}</h1>
		</div>
	)
}
