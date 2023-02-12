import { type FC, Suspense } from 'react'
import { Route, type RouteProps, Routes } from 'react-router-dom'

import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/HomePage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { AppRoutes, type IAppRoutes, RoutePath } from 'shared/config/routes'
import { PageLoader } from 'widgets/PageLoader'

const routes: Record<IAppRoutes, RouteProps> = {
	[AppRoutes.HOME]: {
		path: RoutePath[AppRoutes.HOME],
		element: <MainPage />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath[AppRoutes.ABOUT],
		element: <AboutPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath[AppRoutes.NOT_FOUND],
		element: <NotFoundPage />,
	},
}

export const AppRouter: FC = () => {
	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{Object.values(routes).map(({ path, element }) => (
					<Route key={path} path={path} element={<div className='page-wrapper'>{element}</div>} />
				))}
			</Routes>
		</Suspense>
	)
}
