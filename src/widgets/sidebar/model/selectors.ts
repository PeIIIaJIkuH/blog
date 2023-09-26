import { createSelector } from '@reduxjs/toolkit'

import { getUserUser } from 'entities/user'
import { AppRoute, RoutePath } from 'shared/config/routes'

import { type SidebarLinkItem } from '../lib/types'

export const getSidebarItems = createSelector(getUserUser, (user) => {
	const items: SidebarLinkItem[] = [
		{
			path: RoutePath[AppRoute.HOME],
			icon: 'home',
			text: 'sidebar.home',
		},
		{
			path: RoutePath[AppRoute.ABOUT],
			icon: 'info-circle',
			text: 'sidebar.about',
		},
	]

	if (user) {
		items.push(
			{
				path: RoutePath[AppRoute.PROFILE] + user.id,
				icon: 'user',
				text: 'sidebar.profile',
				auth: true,
			},
			{
				path: RoutePath[AppRoute.ARTICLES],
				icon: 'article',
				text: 'sidebar.articles',
				auth: true,
			},
		)
	}

	return items
})
