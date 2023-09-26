import { type IconType } from 'shared/ui/icon'

export interface SidebarLinkItem {
	path: string
	icon: IconType
	text: string
	auth?: boolean
}
