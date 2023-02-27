import { type FC } from 'react'

import { useAppSelector } from 'app/store'
import { cls } from 'shared/helpers/cls'

import { getError, getProfile, getStatus } from '../../model/selectors'

import s from './profile-card.module.scss'

interface ProfileCardProps {
	className?: string
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
	const profile = useAppSelector(getProfile)
	const status = useAppSelector(getStatus)
	const error = useAppSelector(getError)

	return (
		<div className={cls(s.profileCard, className)}>
			<div>{profile?.username}</div>
			<div>{status}</div>
			<div>{error}</div>
		</div>
	)
}
