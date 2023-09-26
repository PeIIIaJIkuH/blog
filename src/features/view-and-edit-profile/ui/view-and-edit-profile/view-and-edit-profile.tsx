import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from 'app/store'
import { getUser, type User } from 'entities/user'
import { useInitialEffect } from 'shared/hooks/use-initial-effect'
import { type ReducerMap, useLazyModuleLoading } from 'shared/hooks/use-lazy-module-loading'
import { PageError } from 'shared/ui/page-error'
import { PageLoader } from 'shared/ui/page-loader'

import { profileReducer } from '../../model/profile-slice'
import { getError, getProfile, getStatus } from '../../model/selectors'
import { fetchProfile, updateProfile, updateProfileImage } from '../../model/services'
import { type ImagePayload } from '../../model/types'
import { ProfileCard } from '../profile-card/profile-card'

export interface ViewAndEditProfileProps {
	className?: string
	profileId: string
}

const reducerMap: ReducerMap = {
	profile: profileReducer,
}

export const ViewAndEditProfile: FC<ViewAndEditProfileProps> = memo(({ className, profileId }) => {
	const profile = useAppSelector(getProfile)
	const status = useAppSelector(getStatus)
	const error = useAppSelector(getError)
	const user = useAppSelector(getUser)
	const dispatch = useAppDispatch()

	const { t } = useTranslation(['translation', 'profile'])

	useLazyModuleLoading(reducerMap)

	useInitialEffect(() => {
		void dispatch(fetchProfile(profileId))
	})

	const updateData = useCallback(
		async (profile: Partial<User>) => {
			if (!user) {
				return
			}
			await dispatch(
				updateProfile({
					...profile,
					id: user?.id,
				}),
			)
		},
		[dispatch, user],
	)

	const updateImage = useCallback(
		async (payload: ImagePayload) => {
			if (!user) {
				return
			}
			await dispatch(
				updateProfileImage({
					...payload,
					userId: user?.id,
				}),
			)
		},
		[dispatch, user],
	)

	if (status === 'loading') {
		return <PageLoader />
	}

	if (status === 'error') {
		return <PageError message={error ? t(error, { ns: 'profile' }) : t('errors.general')} />
	}

	return (
		<div className={className}>
			<ProfileCard
				profile={profile}
				updateProfileData={updateData}
				updateProfileImage={updateImage}
				readOnly={profileId !== user?.id}
			/>
		</div>
	)
})
