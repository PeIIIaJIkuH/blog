import { type FC, Suspense } from 'react'
import { Route, type RouteProps, Routes } from 'react-router-dom'

import { About } from 'pages/about'
import { ArticleDetails } from 'pages/article-details'
import { Articles } from 'pages/articles'
import { Home } from 'pages/home'
import { NotFound } from 'pages/not-found'
import { Profile } from 'pages/profile'
import { AppRoute, RoutePath } from 'shared/config/routes'
import { PageLoader } from 'shared/ui/page-loader'

import { AuthRoute } from './auth-route'

type AppRouteProps = RouteProps & {
	auth?: boolean
}

const routes: Record<AppRoute, AppRouteProps> = {
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
		auth: true,
	},
	[AppRoute.ARTICLES]: {
		path: RoutePath[AppRoute.ARTICLES],
		element: <Articles />,
		auth: true,
	},
	[AppRoute.ARTICLE_DETAILS]: {
		path: RoutePath[AppRoute.ARTICLE_DETAILS],
		element: <ArticleDetails />,
		auth: true,
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
				{Object.values(routes).map(({ path, element, auth }) => (
					<Route
						key={path}
						path={path}
						element={<div className='page-wrapper'>{auth ? <AuthRoute>{element}</AuthRoute> : element}</div>}
					/>
				))}
			</Routes>
		</Suspense>
	)
}
