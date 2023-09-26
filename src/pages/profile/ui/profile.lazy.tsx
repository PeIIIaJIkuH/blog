import { type FC, lazy } from 'react'

export const ProfilePageLazy = lazy<FC>(async () => {
	return await new Promise((resolve) =>
		setTimeout(() => {
			resolve(import('./profile').then(({ ProfilePage }) => ({ default: ProfilePage })))
		}, 1000),
	)
})
