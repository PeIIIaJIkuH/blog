import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { cls } from 'shared/helpers/cls'
import { EditableInput } from 'shared/ui/editable-input'
import { ImageInput } from 'shared/ui/image-input'
import { PageLoader } from 'shared/ui/page-loader'

import { type ImagePayload, type Profile, type ProfileStatus } from '../../model/types'

import s from './profile-card.module.scss'

interface ProfileCardProps {
	className?: string
	profile?: Profile | null
	status?: ProfileStatus
	error?: string | null
	updateProfileData?: (profile: Partial<Profile>) => Promise<void>
	updateProfileImage?: (payload: ImagePayload) => Promise<void>
}

export const ProfileCard: FC<ProfileCardProps> = memo(
	({ className, profile, status, error, updateProfileData, updateProfileImage }) => {
		const { t } = useTranslation('profile')

		const updateData = useCallback(
			(key: keyof Profile) => async (value: string) => {
				await updateProfileData?.({ [key]: value })
			},
			[updateProfileData],
		)

		const updateImage = useCallback(
			(type: 'avatar' | 'background') => async (image: File) => {
				await updateProfileImage?.({ type, image })
			},
			[updateProfileImage],
		)

		if (status === 'loading') {
			return <PageLoader />
		}

		if (status === 'error') {
			return <div>{error}</div>
		}

		return (
			<div className={cls(s.profileCard, className)}>
				<div className={s.header}>
					<ImageInput
						image={profile?.backgroundUrl}
						variant='changeButton'
						updateImage={updateImage('background')}
						className={s.backgroundImage}
					/>
					<ImageInput
						image={profile?.avatarUrl}
						variant='overlay'
						updateImage={updateImage('avatar')}
						className={s.avatarImage}
					/>
				</div>
				<div className={s.content}>
					<EditableInput
						initialValue={profile?.username}
						className={s.username}
						onUpdate={updateData('username')}
						label={t('username')}
					/>
					<div className={s.group}>
						<EditableInput
							initialValue={profile?.firstName}
							label={t('firstName')}
							onUpdate={updateData('firstName')}
						/>
						<EditableInput initialValue={profile?.lastName} label={t('lastName')} onUpdate={updateData('lastName')} />
					</div>
					<div className={s.group}>
						<EditableInput initialValue={profile?.email} label={t('email')} onUpdate={updateData('email')} />
						<EditableInput
							initialValue={profile?.birthDate}
							label={t('birthDate')}
							onUpdate={updateData('birthDate')}
						/>
					</div>
					<div className={s.group}>
						<EditableInput initialValue={profile?.country} label={t('country')} onUpdate={updateData('country')} />
						<EditableInput initialValue={profile?.city} label={t('city')} onUpdate={updateData('city')} />
					</div>
					<div className={s.group}>
						<EditableInput
							initialValue={profile?.balance !== undefined ? profile.balance.toString() : ''}
							label={t('balance')}
							onUpdate={updateData('balance')}
						/>
						<EditableInput initialValue={profile?.currency} label={t('currency')} onUpdate={updateData('currency')} />
					</div>
				</div>
			</div>
		)
	},
)
