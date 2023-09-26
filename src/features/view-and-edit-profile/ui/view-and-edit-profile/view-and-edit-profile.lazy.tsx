import { type FC, lazy } from 'react'

import { type ViewAndEditProfileProps } from './view-and-edit-profile'

export const ViewAndEditProfileLazy = lazy<FC<ViewAndEditProfileProps>>(async () => {
	return await new Promise((resolve) =>
		setTimeout(() => {
			resolve(import('./view-and-edit-profile').then(({ ViewAndEditProfile }) => ({ default: ViewAndEditProfile })))
		}, 1000),
	)
})
