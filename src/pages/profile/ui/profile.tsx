import { type FC, memo } from 'react'
import { useParams } from 'react-router-dom'

import { ViewAndEditProfile } from 'features/view-and-edit-profile'
import { PageError } from 'shared/ui/page-error'

import s from './profile.module.scss'

export const Profile: FC = memo(() => {
	const { id } = useParams<{ id: string }>()

	if (!id) {
		return <PageError message='No article id' />
	}

	return (
		<div className={s.profile}>
			<ViewAndEditProfile profileId={id} />
		</div>
	)
})
