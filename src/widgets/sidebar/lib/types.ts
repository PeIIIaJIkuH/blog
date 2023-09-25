import { type AppRoute } from 'shared/config/routes'
import { type IconType } from 'shared/ui/icon'

export interface SidebarLinkItem {
	path: AppRoute
	icon: IconType
	text: string
	auth?: boolean
}
