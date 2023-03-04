import { type ReactNode } from 'react'

import HomeIcon from 'shared/assets/icons/home.svg'
import NotesIcon from 'shared/assets/icons/notes.svg'
import UserIcon from 'shared/assets/icons/user.svg'
import { AppRoute } from 'shared/config/routes'

export const LOCAL_STORAGE_SIDEBAR_KEY = 'sidebar'

export interface SidebarLinkItem {
	path: AppRoute
	icon: ReactNode
	text: string
}

export const SIDEBAR_LINKS: SidebarLinkItem[] = [
	{
		path: AppRoute.HOME,
		icon: <HomeIcon />,
		text: 'sidebar.home',
	},
	{
		path: AppRoute.ABOUT,
		icon: <NotesIcon />,
		text: 'sidebar.about',
	},
	{
		path: AppRoute.PROFILE,
		icon: <UserIcon />,
		text: 'sidebar.profile',
	},
]
