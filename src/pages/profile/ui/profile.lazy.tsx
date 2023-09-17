import { type FC, lazy } from 'react'

export const ProfileLazy = lazy<FC>(
	async () =>
		await new Promise((resolve) => {
			setTimeout(() => {
				resolve(import('./profile').then(({ Profile }) => ({ default: Profile })))
			}, 0)
		}),
)
