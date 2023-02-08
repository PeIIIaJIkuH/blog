export const AppRoutes = {
	HOME: 'home',
	ABOUT: 'about',
	NOT_FOUND: 'notFound',
} as const
type AppRoutes = typeof AppRoutes[keyof typeof AppRoutes]

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.HOME]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.NOT_FOUND]: '*',
}
