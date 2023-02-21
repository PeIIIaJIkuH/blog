import { type FC, Suspense } from 'react'
import { Route, type RouteProps, Routes } from 'react-router-dom'

import { About } from 'pages/about'
import { Home } from 'pages/home'
import { NotFoundPage } from 'pages/not-found'
import { AppRoutes, type IAppRoutes, RoutePath } from 'shared/config/routes'
import { PageLoader } from 'widgets/page-loader'

const routes: Record<IAppRoutes, RouteProps> = {
	[AppRoutes.HOME]: {
		path: RoutePath[AppRoutes.HOME],
		element: <Home />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath[AppRoutes.ABOUT],
		element: <About />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath[AppRoutes.NOT_FOUND],
		element: <NotFoundPage />,
	},
}

export const Routing: FC = () => {
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
