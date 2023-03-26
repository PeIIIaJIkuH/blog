import { type FC, memo, useCallback } from 'react'

import { cls } from 'shared/helpers/cls'
import { EditableInput } from 'shared/ui/editable-input'
import { ImageInput } from 'shared/ui/image-input'
import { PageLoader } from 'shared/ui/page-loader'

import { type Profile, type ProfileStatus } from '../../model/types'

import s from './profile-card.module.scss'

interface ProfileCardProps {
	className?: string
	profile?: Profile | null
	status?: ProfileStatus
	error?: string | null
	updateProfile?: (profile: Partial<Profile>) => Promise<void>
}

export const ProfileCard: FC<ProfileCardProps> = memo(({ className, profile, status, error, updateProfile }) => {
	const update = useCallback(
		(key: keyof Profile) => async (value: string) => {
			await updateProfile?.({ [key]: value })
		},
		[updateProfile],
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
					image={profile?.backgroundImage}
					variant='changeButton'
					updateImage={update('backgroundImage')}
					className={s.backgroundImage}
				/>
				<ImageInput
					image={profile?.avatarImage}
					variant='overlay'
					updateImage={update('avatarImage')}
					className={s.avatarImage}
				/>
			</div>
			<div className={s.content}>
				<EditableInput
					initialValue={profile?.username}
					className={s.username}
					onUpdate={update('username')}
					label='Username'
				/>
				<div className={s.group}>
					<EditableInput initialValue={profile?.firstName} label='First name' onUpdate={update('firstName')} />
					<EditableInput initialValue={profile?.lastName} label='Last name' onUpdate={update('lastName')} />
				</div>
				<EditableInput initialValue={profile?.birthDate} label='Birth date' onUpdate={update('birthDate')} />
				<div className={s.group}>
					<EditableInput initialValue={profile?.country} label='Country' onUpdate={update('country')} />
					<EditableInput initialValue={profile?.city} label='City' onUpdate={update('city')} />
				</div>
				<div className={s.group}>
					<EditableInput
						initialValue={profile?.balance ? profile.balance.toString() : ''}
						label='Balance'
						onUpdate={update('balance')}
					/>
					<EditableInput initialValue={profile?.currency} label='Currency' onUpdate={update('currency')} />
				</div>
			</div>
		</div>
	)
})
