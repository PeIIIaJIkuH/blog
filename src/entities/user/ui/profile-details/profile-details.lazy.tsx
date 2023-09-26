import { type FC, lazy } from 'react'

import { type ProfileDetailsProps } from './profile-details'

export const ProfileDetailsLazy = lazy<FC<ProfileDetailsProps>>(async () => {
	return await new Promise((resolve) =>
		setTimeout(() => {
			resolve(import('./profile-details').then(({ ProfileDetails }) => ({ default: ProfileDetails })))
		}, 1000),
	)
})
