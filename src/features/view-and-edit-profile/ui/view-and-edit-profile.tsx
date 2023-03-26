import { type FC, useCallback, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from 'app/store'
import { type Profile, ProfileCard } from 'entities/profile'
import { type ReducerMap, useLazyModuleLoading } from 'shared/hooks/use-lazy-module-loading'

import { profileReducer } from '../model/profile-slice'
import { getError, getProfile, getStatus } from '../model/selectors'
import { fetchProfile, updateProfile } from '../model/services'

interface ViewAndEditProfileProps {
	className?: string
}

const reducerMap: ReducerMap = {
	profile: profileReducer,
}

export const ViewAndEditProfile: FC<ViewAndEditProfileProps> = ({ className }) => {
	const profile = useAppSelector(getProfile)
	const status = useAppSelector(getStatus)
	const error = useAppSelector(getError)
	const dispatch = useAppDispatch()

	useLazyModuleLoading(reducerMap)

	useEffect(() => {
		void dispatch(fetchProfile())
	}, [dispatch])

	const update = useCallback(
		async (profile: Partial<Profile>) => {
			await dispatch(updateProfile(profile))
		},
		[dispatch],
	)

	return (
		<div className={className}>
			<ProfileCard profile={profile} status={status} error={error} updateProfile={update} />
		</div>
	)
}
