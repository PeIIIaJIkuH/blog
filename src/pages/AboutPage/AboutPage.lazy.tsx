import {lazy} from 'react'

export const AboutPageLazy = lazy(() => new Promise(resolve => {
	// @ts-ignore
	setTimeout(() => resolve(import('./AboutPage').then(({AboutPage}) => ({default: AboutPage}))), 1500)
}))
