export enum AppRoute {
	HOME = 'home',
	ABOUT = 'about',
	PROFILE = 'profile',
	NOT_FOUND = 'notFound',
}

export const RoutePath: Record<AppRoute, string> = {
	[AppRoute.HOME]: '/',
	[AppRoute.ABOUT]: '/about',
	[AppRoute.PROFILE]: '/profile',
	[AppRoute.NOT_FOUND]: '*',
}
