import { type FC, Suspense, useEffect } from 'react'

import { userActions } from 'entities/user'
import { Routing } from 'pages'
import { Header } from 'widgets/header'
import { Sidebar } from 'widgets/sidebar'

import 'shared/config/i18n'

import './styles/index.scss'

import { useAppDispatch } from './store'

export const App: FC = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(userActions.rehydrate())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className='app'>
			<Suspense fallback=''>
				<Header />
				<Sidebar />
				<div className='content-page'>
					<Routing />
				</div>
			</Suspense>
		</div>
	)
}
