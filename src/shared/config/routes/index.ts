export enum AppRoute {
	HOME = 'home',
	ABOUT = 'about',
	PROFILE = 'profile',
	ARTICLES = 'articles',
	ARTICLE_DETAILS = 'article-details',
	NOT_FOUND = 'notFound',
}

export const RoutePath: Record<AppRoute, string> = {
	[AppRoute.HOME]: '/',
	[AppRoute.ABOUT]: '/about',
	[AppRoute.PROFILE]: '/profile/', // + :id
	[AppRoute.ARTICLES]: '/articles',
	[AppRoute.ARTICLE_DETAILS]: '/articles/', // + :id
	[AppRoute.NOT_FOUND]: '*',
}
