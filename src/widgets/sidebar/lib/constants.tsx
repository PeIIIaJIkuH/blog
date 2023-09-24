import ArticleIcon from 'shared/assets/icons/article.svg'
import HomeIcon from 'shared/assets/icons/home.svg'
import InfoCircleIcon from 'shared/assets/icons/info-circle.svg'
import UserIcon from 'shared/assets/icons/user.svg'
import { AppRoute } from 'shared/config/routes'

import { type SidebarLinkItem } from './types'

export const LOCAL_STORAGE_SIDEBAR_KEY = 'sidebar_open'

export const SIDEBAR_LINKS: SidebarLinkItem[] = [
	{
		path: AppRoute.HOME,
		icon: <HomeIcon />,
		text: 'sidebar.home',
	},
	{
		path: AppRoute.ABOUT,
		icon: <InfoCircleIcon />,
		text: 'sidebar.about',
	},
	{
		path: AppRoute.PROFILE,
		icon: <UserIcon />,
		text: 'sidebar.profile',
		auth: true,
	},
	{
		path: AppRoute.ARTICLES,
		icon: <ArticleIcon />,
		text: 'sidebar.articles',
		auth: true,
	},
]
