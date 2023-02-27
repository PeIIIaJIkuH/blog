import { type ReactNode } from 'react'

import HomeIcon from 'shared/assets/icons/home.svg'
import NotesIcon from 'shared/assets/icons/notes.svg'
import UserIcon from 'shared/assets/icons/user.svg'
import i18n from 'shared/config/i18n'
import { type IAppRoutes } from 'shared/config/routes'

export const LOCAL_STORAGE_SIDEBAR_KEY = 'sidebar'

export interface SidebarLinkItem {
	path: Exclude<IAppRoutes, 'notFound'>
	icon: ReactNode
	text: string
}

export const SIDEBAR_LINKS: SidebarLinkItem[] = [
	{
		path: 'home',
		icon: <HomeIcon />,
		text: i18n.t('sidebar.home'),
	},
	{
		path: 'about',
		icon: <NotesIcon />,
		text: i18n.t('sidebar.about'),
	},
	{
		path: 'profile',
		icon: <UserIcon />,
		text: i18n.t('sidebar.profile'),
	},
]
