import { type FC, memo, useCallback } from 'react'

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
						label='Username'
					/>
					<div className={s.group}>
						<EditableInput initialValue={profile?.firstName} label='First name' onUpdate={updateData('firstName')} />
						<EditableInput initialValue={profile?.lastName} label='Last name' onUpdate={updateData('lastName')} />
					</div>
					<EditableInput initialValue={profile?.birthDate} label='Birth date' onUpdate={updateData('birthDate')} />
					<div className={s.group}>
						<EditableInput initialValue={profile?.country} label='Country' onUpdate={updateData('country')} />
						<EditableInput initialValue={profile?.city} label='City' onUpdate={updateData('city')} />
					</div>
					<div className={s.group}>
						<EditableInput
							initialValue={profile?.balance ? profile.balance.toString() : ''}
							label='Balance'
							onUpdate={updateData('balance')}
						/>
						<EditableInput initialValue={profile?.currency} label='Currency' onUpdate={updateData('currency')} />
					</div>
				</div>
			</div>
		)
	},
)
