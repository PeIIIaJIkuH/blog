import { type FC, memo } from 'react'

import { ViewAndEditProfile } from 'features/view-and-edit-profile'

import s from './profile.module.scss'

export const Profile: FC = memo(() => {
	return (
		<div className={s.profile}>
			<ViewAndEditProfile />
		</div>
	)
})
