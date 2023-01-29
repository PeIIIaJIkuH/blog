import {lazy} from 'react'

export const MainPageLazy = lazy(() => new Promise(resolve => {
	// @ts-ignore
	setTimeout(() => resolve(import('./MainPage').then(({MainPage}) => ({default: MainPage}))), 1500)
}))
