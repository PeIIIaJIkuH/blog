export const AppRoutes = {
	HOME: 'home',
	ABOUT: 'about',
	NOT_FOUND: 'notFound',
} as const

export type IRoutePath = typeof AppRoutes[keyof typeof AppRoutes]

export const RoutePath: Record<IRoutePath, string> = {
	[AppRoutes.HOME]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.NOT_FOUND]: '*',
}
