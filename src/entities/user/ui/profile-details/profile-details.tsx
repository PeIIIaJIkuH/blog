import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from 'app/store'
import { cls } from 'shared/helpers/cls'
import { useInitialEffect } from 'shared/hooks/use-initial-effect'
import { type ReducerMap, useLazyModuleLoading } from 'shared/hooks/use-lazy-module-loading'
import { EditableInput } from 'shared/ui/editable-input'
import { ImageInput } from 'shared/ui/image-input'
import { PageError } from 'shared/ui/page-error'
import { PageLoader } from 'shared/ui/page-loader'

import { getProfileError, getProfileProfile, getProfileStatus } from '../../model/selectors/profile.selectors'
import { getUserUser } from '../../model/selectors/user.selectors'
import { fetchProfile, updateProfileData, updateProfileImage } from '../../model/services/profile.services'
import { profileReducer } from '../../model/slices/profile.slice'
import { type User } from '../../model/types'

import s from './profile-details.module.scss'

export interface ProfileDetailsProps {
	className?: string
	profileId: string
}

const reducerMap: ReducerMap = {
	profile: profileReducer,
}

export const ProfileDetails: FC<ProfileDetailsProps> = memo(({ className, profileId }) => {
	const profile = useAppSelector(getProfileProfile)
	const status = useAppSelector(getProfileStatus)
	const error = useAppSelector(getProfileError)
	const user = useAppSelector(getUserUser)
	const readOnly = profileId !== user?.id
	const dispatch = useAppDispatch()

	const { t } = useTranslation(['translation', 'profile'])

	useLazyModuleLoading(reducerMap)

	useInitialEffect(() => {
		void dispatch(fetchProfile(profileId))
	})

	const updateData = useCallback(
		(key: keyof User) => async (value: string) => {
			// await updateProfileD?.({ [key]: value })
			if (!user) {
				return
			}
			await dispatch(
				updateProfileData({
					[key]: value,
					id: user?.id,
				}),
			)
		},
		[dispatch, user],
	)

	const updateImage = useCallback(
		(type: 'avatar' | 'background') => async (image: File) => {
			if (!user) {
				return
			}
			await dispatch(
				updateProfileImage({
					type,
					image,
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
			<div className={cls(s.profileCard, className)}>
				<div className={s.header}>
					<ImageInput
						image={profile?.backgroundUrl}
						variant='changeButton'
						updateImage={updateImage('background')}
						className={s.backgroundImage}
						readOnly={readOnly}
					/>
					<ImageInput
						image={profile?.avatarUrl}
						variant='overlay'
						updateImage={updateImage('avatar')}
						className={s.avatarImage}
						readOnly={readOnly}
					/>
				</div>
				<div className={s.content}>
					<EditableInput
						initialValue={profile?.username}
						className={s.username}
						onUpdate={updateData('username')}
						label={t('username')}
						readOnly={readOnly}
					/>
					<div className={s.group}>
						<EditableInput
							initialValue={profile?.firstName}
							label={t('firstName')}
							onUpdate={updateData('firstName')}
							readOnly={readOnly}
						/>
						<EditableInput
							initialValue={profile?.lastName}
							label={t('lastName')}
							onUpdate={updateData('lastName')}
							readOnly={readOnly}
						/>
					</div>
					<div className={s.group}>
						<EditableInput
							initialValue={profile?.email}
							label={t('email')}
							onUpdate={updateData('email')}
							readOnly={readOnly}
						/>
						<EditableInput
							initialValue={profile?.birthDate}
							label={t('birthDate')}
							onUpdate={updateData('birthDate')}
							readOnly={readOnly}
						/>
					</div>
					<div className={s.group}>
						<EditableInput
							initialValue={profile?.country}
							label={t('country')}
							onUpdate={updateData('country')}
							readOnly={readOnly}
						/>
						<EditableInput
							initialValue={profile?.city}
							label={t('city')}
							onUpdate={updateData('city')}
							readOnly={readOnly}
						/>
					</div>
					<div className={s.group}>
						<EditableInput
							initialValue={profile?.balance !== undefined ? profile.balance.toString() : ''}
							label={t('balance')}
							onUpdate={updateData('balance')}
							readOnly={readOnly}
						/>
						<EditableInput
							initialValue={profile?.currency}
							label={t('currency')}
							onUpdate={updateData('currency')}
							readOnly={readOnly}
						/>
					</div>
				</div>
			</div>
		</div>
	)
})
