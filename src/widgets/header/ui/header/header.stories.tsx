import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { withStore } from 'shared/config/storybook'

import { Header } from './header'

const componentMeta: ComponentMeta<typeof Header> = {
	title: 'widgets/header',
	component: Header,
}

export default componentMeta

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const LoggedOut = Template.bind({})
LoggedOut.decorators = [
	withStore({
		user: {
			user: null,
		},
	}),
]

export const LoggedIn = Template.bind({})
LoggedIn.decorators = [
	withStore({
		user: {
			user: {
				username: 'username',
			},
		},
	}),
]
