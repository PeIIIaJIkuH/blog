export const RoutePath = {
	HOME: 'home',
	ABOUT: 'about',
	NOT_FOUND: 'notFound',
} as const

export type IRoutePath = typeof RoutePath[keyof typeof RoutePath]

export const AppRoutes: Record<IRoutePath, string> = {
	[RoutePath.HOME]: '/',
	[RoutePath.ABOUT]: '/about',
	[RoutePath.NOT_FOUND]: '*',
}
