import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { AppRoute } from 'shared/config/routes'

import { SidebarLink } from './sidebar-link'

const componentMeta: ComponentMeta<typeof SidebarLink> = {
	title: 'widgets/sidebar/sidebar-link',
	component: SidebarLink,
	decorators: [
		(Story) => (
			<div style={{ width: 'fit-content' }}>
				<Story />
			</div>
		),
	],
}

export default componentMeta

const Template: ComponentStory<typeof SidebarLink> = (args) => <SidebarLink {...args} />

export const Home = Template.bind({})
Home.args = {
	item: {
		path: AppRoute.HOME,
		text: 'sidebar.home',
		icon: 'home',
	},
}

export const About = Template.bind({})
About.args = {
	item: {
		path: AppRoute.ABOUT,
		text: 'sidebar.about',
		icon: 'info-circle',
	},
}

export const Profile = Template.bind({})
Profile.args = {
	item: {
		path: AppRoute.PROFILE,
		text: 'sidebar.profile',
		icon: 'user',
	},
}

export const Collapsed = Template.bind({})
Collapsed.args = {
	item: {
		path: AppRoute.HOME,
		text: 'sidebar.home',
		icon: 'home',
	},
	collapsed: true,
}
