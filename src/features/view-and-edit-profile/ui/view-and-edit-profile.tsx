import { type FC, memo, useCallback, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from 'app/store'
import { type Profile, ProfileCard, type ImagePayload } from 'entities/profile'
import { type ReducerMap, useLazyModuleLoading } from 'shared/hooks/use-lazy-module-loading'

import { profileReducer } from '../model/profile-slice'
import { getError, getProfile, getStatus } from '../model/selectors'
import { fetchProfile, updateProfile, updateProfileImage } from '../model/services'

interface ViewAndEditProfileProps {
	className?: string
}

const reducerMap: ReducerMap = {
	profile: profileReducer,
}

export const ViewAndEditProfile: FC<ViewAndEditProfileProps> = memo(({ className }) => {
	const profile = useAppSelector(getProfile)
	const status = useAppSelector(getStatus)
	const error = useAppSelector(getError)
	const dispatch = useAppDispatch()

	useLazyModuleLoading(reducerMap)

	useEffect(() => {
		void dispatch(fetchProfile())
	}, [dispatch])

	const updateData = useCallback(
		async (profile: Partial<Profile>) => {
			await dispatch(updateProfile(profile))
		},
		[dispatch],
	)

	const updateImage = useCallback(
		async (payload: ImagePayload) => {
			await dispatch(updateProfileImage(payload))
		},
		[dispatch],
	)

	return (
		<div className={className}>
			<ProfileCard
				profile={profile}
				status={status}
				error={error}
				updateProfileData={updateData}
				updateProfileImage={updateImage}
			/>
		</div>
	)
})
