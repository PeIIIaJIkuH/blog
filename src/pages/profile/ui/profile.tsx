import { type FC, memo } from 'react'
import { useParams } from 'react-router-dom'

import { ProfileDetails } from 'entities/user'
import { PageError } from 'shared/ui/page-error'

import s from './profile.module.scss'

export const ProfilePage: FC = memo(() => {
	const { id } = useParams<{ id: string }>()

	if (!id) {
		return <PageError message='No article id' />
	}

	return (
		<div className={s.profilePage}>
			<ProfileDetails profileId={id} />
		</div>
	)
})
