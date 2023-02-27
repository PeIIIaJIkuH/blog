import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import HomeIcon from 'shared/assets/icons/home.svg'
import NotesIcon from 'shared/assets/icons/notes.svg'
import UserIcon from 'shared/assets/icons/user.svg'

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
		path: 'home',
		text: 'sidebar.home',
		icon: <HomeIcon />,
	},
}

export const About = Template.bind({})
About.args = {
	item: {
		path: 'about',
		text: 'sidebar.about',
		icon: <NotesIcon />,
	},
}

export const Profile = Template.bind({})
Profile.args = {
	item: {
		path: 'profile',
		text: 'sidebar.profile',
		icon: <UserIcon />,
	},
}

export const Collapsed = Template.bind({})
Collapsed.args = {
	item: {
		path: 'home',
		text: 'sidebar.home',
		icon: <HomeIcon />,
	},
	collapsed: true,
}
