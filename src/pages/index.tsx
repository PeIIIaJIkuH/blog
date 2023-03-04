import { type FC, Suspense } from 'react'
import { Route, type RouteProps, Routes } from 'react-router-dom'

import { About } from 'pages/about'
import { Home } from 'pages/home'
import { NotFound } from 'pages/not-found'
import { Profile } from 'pages/profile'
import { AppRoute, RoutePath } from 'shared/config/routes'
import { PageLoader } from 'widgets/page-loader'

const routes: Record<AppRoute, RouteProps> = {
	[AppRoute.HOME]: {
		path: RoutePath[AppRoute.HOME],
		element: <Home />,
	},
	[AppRoute.ABOUT]: {
		path: RoutePath[AppRoute.ABOUT],
		element: <About />,
	},
	[AppRoute.PROFILE]: {
		path: RoutePath[AppRoute.PROFILE],
		element: <Profile />,
	},
	[AppRoute.NOT_FOUND]: {
		path: RoutePath[AppRoute.NOT_FOUND],
		element: <NotFound />,
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
