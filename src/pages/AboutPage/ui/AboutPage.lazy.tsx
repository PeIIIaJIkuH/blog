import { lazy } from 'react'

export const AboutPageLazy = lazy(async () => await new Promise(resolve => {
	// @ts-expect-error
	setTimeout(() => { resolve(import('./AboutPage').then(({ AboutPage }) => ({ default: AboutPage }))) }, 1500)
}))
