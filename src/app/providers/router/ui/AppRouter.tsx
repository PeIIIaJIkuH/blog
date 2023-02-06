import { type FC, Suspense } from 'react'
import { Route, type RouteProps, Routes } from 'react-router-dom'

import { AboutPage } from '@pages/AboutPage'
import { MainPage } from '@pages/MainPage'
import { NotFoundPage } from '@pages/NotFoundPage'
import { PageLoader } from '@widgets/PageLoader'
import { AppRoutes, ERoutes } from '@shared/config/routes'

const routes: Record<ERoutes, RouteProps> = {
	[ERoutes.HOME]: {
		path: AppRoutes[ERoutes.HOME],
		element: <MainPage/>,
	},
	[ERoutes.ABOUT]: {
		path: AppRoutes[ERoutes.ABOUT],
		element: <AboutPage/>,
	},
	[ERoutes.NOT_FOUND]: {
		path: AppRoutes[ERoutes.NOT_FOUND],
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
