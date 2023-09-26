import { type FC, Suspense } from 'react'
import { Route, type RouteProps, Routes } from 'react-router-dom'

import { AppRoute, RoutePath } from 'shared/config/routes'
import { PageLoader } from 'shared/ui/page-loader'

import { AboutPage } from './about'
import { ArticleDetailsPage } from './article-details'
import { ArticlesPage } from './articles'
import { AuthRoute } from './auth-route'
import { HomePage } from './home'
import { NotFoundPage } from './not-found'
import { ProfilePage } from './profile'

type AppRouteProps = RouteProps & {
	auth?: boolean
}

const routes: Record<AppRoute, AppRouteProps> = {
	[AppRoute.HOME]: {
		path: RoutePath[AppRoute.HOME],
		element: <HomePage />,
	},
	[AppRoute.ABOUT]: {
		path: RoutePath[AppRoute.ABOUT],
		element: <AboutPage />,
	},
	[AppRoute.PROFILE]: {
		path: `${RoutePath[AppRoute.PROFILE]}:id`,
		element: <ProfilePage />,
		auth: true,
	},
	[AppRoute.ARTICLES]: {
		path: RoutePath[AppRoute.ARTICLES],
		element: <ArticlesPage />,
		auth: true,
	},
	[AppRoute.ARTICLE_DETAILS]: {
		path: `${RoutePath[AppRoute.ARTICLE_DETAILS]}:id`,
		element: <ArticleDetailsPage />,
		auth: true,
	},
	[AppRoute.NOT_FOUND]: {
		path: RoutePath[AppRoute.NOT_FOUND],
		element: <NotFoundPage />,
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
