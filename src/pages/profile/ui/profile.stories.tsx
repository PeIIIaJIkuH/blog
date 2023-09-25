import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { profileReducer } from 'features/view-and-edit-profile'
import { withStore } from 'shared/config/storybook'
import { type ReducerMap } from 'shared/hooks/use-lazy-module-loading'

import { Profile } from './profile'

const reducerMap: ReducerMap = {
	profile: profileReducer,
}

const componentMeta: ComponentMeta<typeof Profile> = {
	title: 'pages/profile',
	component: Profile,
}

export default componentMeta

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />

export const Default = Template.bind({})
Default.decorators = [
	withStore(
		{
			profile: {
				profile: {
					username: 'username',
					email: 'email',
					firstName: 'firstName',
					lastName: 'lastName',
					avatarUrl: null,
					backgroundUrl: null,
					currency: 'USD',
					balance: 0,
					country: 'country',
					city: 'city',
					birthDate: 'birthDate',
				},
				status: 'success',
			},
		},
		reducerMap,
	),
]
Default.parameters = {
	router: {
		path: '/profiles/:id',
		route: '/profiles/1',
	},
}
