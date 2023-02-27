import { type FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppDispatch } from 'app/store'
import { fetchProfile, ProfileCard, profileReducer } from 'entities/profile'
import { type ReducerMap, useLazyModuleLoading } from 'shared/hooks/use-lazy-module-loading'

const reducerMap: ReducerMap = {
	profile: profileReducer,
}

export const Profile: FC = () => {
	const { t } = useTranslation('profile')
	const dispatch = useAppDispatch()

	useLazyModuleLoading(reducerMap)

	useEffect(() => {
		void dispatch(fetchProfile())
	}, [dispatch])

	return (
		<div>
			<h1>{t('title')}</h1>
			<ProfileCard />
		</div>
	)
}
