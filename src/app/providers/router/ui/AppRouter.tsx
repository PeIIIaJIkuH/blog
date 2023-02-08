import { type FC, Suspense } from 'react'
import { Route, type RouteProps, Routes } from 'react-router-dom'

import { AboutPage } from '@pages/AboutPage'
import { MainPage } from '@pages/MainPage'
import { NotFoundPage } from '@pages/NotFoundPage'
import { PageLoader } from '@widgets/PageLoader'
import { AppRoutes, RoutePath } from '@shared/config/routes'

const routes: Record<AppRoutes, RouteProps> = {
	[AppRoutes.HOME]: {
		path: RoutePath[AppRoutes.HOME],
		element: <MainPage/>,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath[AppRoutes.ABOUT],
		element: <AboutPage/>,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath[AppRoutes.NOT_FOUND],
		element: <NotFoundPage/>,
	},
}

export const AppRouter: FC = () => {
	return (
		<Suspense fallback={<PageLoader/>}>
			<Routes>
				{Object.values(routes).map(({ path, element }) => (
					<Route key={path} path={path} element={(
						<div className='page-wrapper'>
							{element}
						</div>
					)}/>
				))}
			</Routes>
		</Suspense>
	)
}
