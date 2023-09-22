import { type FC, memo, useCallback, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from 'app/store'
import { type Profile, ProfileCard, type ImagePayload } from 'entities/profile'
import { cls } from 'shared/helpers/cls'
import { type ReducerMap, useLazyModuleLoading } from 'shared/hooks/use-lazy-module-loading'
import { PageLoader } from 'shared/ui/page-loader'

import { profileReducer } from '../model/profile-slice'
import { getError, getProfile, getStatus } from '../model/selectors'
import { fetchProfile, updateProfile, updateProfileImage } from '../model/services'

import s from './view-and-edit-profile.module.scss'

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
		if (PROJECT !== 'storybook') {
			void dispatch(fetchProfile())
		}
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

	if (status === 'loading') {
		return <PageLoader />
	}

	if (status === 'error') {
		return <div>{error}</div>
	}

	return (
		<div className={cls(className, s.viewAndEditProfile)}>
			<ProfileCard profile={profile} updateProfileData={updateData} updateProfileImage={updateImage} />
		</div>
	)
})
