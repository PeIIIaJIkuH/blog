import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { cls } from 'shared/helpers/cls'
import { AppLink } from 'shared/ui/app-link'
import { Icon } from 'shared/ui/icon'
import { Typography } from 'shared/ui/typography'

import { type SidebarLinkItem } from '../../lib/types'

import s from './sidebar-link.module.scss'

interface SidebarLinkProps {
	className?: string
	item: SidebarLinkItem
	collapsed?: boolean
}

export const SidebarLink: FC<SidebarLinkProps> = memo(({ className, item, collapsed }) => {
	const { t } = useTranslation()

	return (
		<AppLink to={item.path} nav className={cls(s.link, className, collapsed && s.collapsed)}>
			<Icon type={item.icon} />
			<Typography as='span' text={t(item.text)} />
		</AppLink>
	)
})
