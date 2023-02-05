export enum ERoutes {
	HOME = 'home',
	ABOUT = 'about',
}

export const AppRoutes: Record<ERoutes, string> = {
	[ERoutes.HOME]: '/',
	[ERoutes.ABOUT]: '/about',
}
