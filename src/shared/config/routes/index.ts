export const AppRoutes = {
	HOME: 'home',
	ABOUT: 'about',
	PROFILE: 'profile',
	NOT_FOUND: 'notFound',
} as const
export type IAppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes]

export const RoutePath: Record<IAppRoutes, string> = {
	[AppRoutes.HOME]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile',
	[AppRoutes.NOT_FOUND]: '*',
}
