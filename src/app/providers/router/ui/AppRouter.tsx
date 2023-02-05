import {FC, Suspense} from 'react'
import {Route, RouteProps, Routes} from 'react-router-dom'

import {AboutPage} from '@pages/AboutPage'
import {MainPage} from '@pages/MainPage'
import {AppRoutes, ERoutes} from '@shared/config/routes'

const routes: Record<ERoutes, RouteProps> = {
	[ERoutes.HOME]: {
		path: AppRoutes[ERoutes.HOME],
		element: <MainPage/>,
	},
	[ERoutes.ABOUT]: {
		path: AppRoutes[ERoutes.ABOUT],
		element: <AboutPage/>,
	},
}

export const AppRouter: FC = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{Object.values(routes).map(({path, element}) => (
					<Route key={path} path={path} element={element}/>
				))}
			</Routes>
		</Suspense>
	)
}
