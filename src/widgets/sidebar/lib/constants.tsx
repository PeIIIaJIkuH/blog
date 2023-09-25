import { AppRoute } from 'shared/config/routes'

import { type SidebarLinkItem } from './types'

export const SIDEBAR_LINKS: SidebarLinkItem[] = [
	{
		path: AppRoute.HOME,
		icon: 'home',
		text: 'sidebar.home',
	},
	{
		path: AppRoute.ABOUT,
		icon: 'info-circle',
		text: 'sidebar.about',
	},
	{
		path: AppRoute.PROFILE,
		icon: 'user',
		text: 'sidebar.profile',
		auth: true,
	},
	{
		path: AppRoute.ARTICLES,
		icon: 'article',
		text: 'sidebar.articles',
		auth: true,
	},
]
