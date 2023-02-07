import { type FC, Suspense } from 'react'
import { Route, type RouteProps, Routes } from 'react-router-dom'

import { AboutPage } from '@pages/AboutPage'
import { MainPage } from '@pages/MainPage'
import { NotFoundPage } from '@pages/NotFoundPage'
import { PageLoader } from '@widgets/PageLoader'
import { AppRoutes, type IRoutePath, RoutePath } from '@shared/config/routes'

const routes: Record<IRoutePath, RouteProps> = {
	[RoutePath.HOME]: {
		path: AppRoutes[RoutePath.HOME],
		element: <MainPage/>,
	},
	[RoutePath.ABOUT]: {
		path: AppRoutes[RoutePath.ABOUT],
		element: <AboutPage/>,
	},
	[RoutePath.NOT_FOUND]: {
		path: AppRoutes[RoutePath.NOT_FOUND],
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
