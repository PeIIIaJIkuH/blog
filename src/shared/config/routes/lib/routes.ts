export enum ERoutes {
	HOME = 'home',
	ABOUT = 'about',
	NOT_FOUND = 'notFound',
}

export const AppRoutes: Record<ERoutes, string> = {
	[ERoutes.HOME]: '/',
	[ERoutes.ABOUT]: '/about',
	[ERoutes.NOT_FOUND]: '*',
}
