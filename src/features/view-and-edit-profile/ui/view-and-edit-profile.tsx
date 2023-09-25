import { type FC, memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from 'app/store'
import { type Profile, ProfileCard, type ImagePayload } from 'entities/profile'
import { type ReducerMap, useLazyModuleLoading } from 'shared/hooks/use-lazy-module-loading'
import { PageError } from 'shared/ui/page-error'
import { PageLoader } from 'shared/ui/page-loader'

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

	const { t } = useTranslation(['translation', 'profile'])

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
		return <PageError message={error ? t(error, { ns: 'profile' }) : t('errors.general')} />
	}

	return (
		<div className={className}>
			<ProfileCard profile={profile} updateProfileData={updateData} updateProfileImage={updateImage} />
		</div>
	)
})
