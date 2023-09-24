import { type ReactNode } from 'react'

import { type AppRoute } from 'shared/config/routes'

export interface SidebarLinkItem {
	path: AppRoute
	icon: ReactNode
	text: string
	auth?: boolean
}
