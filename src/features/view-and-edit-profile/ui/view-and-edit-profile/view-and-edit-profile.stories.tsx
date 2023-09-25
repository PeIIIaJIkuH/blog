import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { withStore } from 'shared/config/storybook'
import { type ReducerMap } from 'shared/hooks/use-lazy-module-loading'

import { profileReducer } from '../../model/profile-slice'

import { ViewAndEditProfile } from './view-and-edit-profile'

const reducerMap: ReducerMap = {
	profile: profileReducer,
}

const componentMeta: ComponentMeta<typeof ViewAndEditProfile> = {
	title: 'features/view-and-edit-profile',
	component: ViewAndEditProfile,
}

export default componentMeta

const Template: ComponentStory<typeof ViewAndEditProfile> = (args) => <ViewAndEditProfile {...args} />

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
			},
		},
		reducerMap,
	),
]

export const Loading = Template.bind({})
Loading.decorators = [
	withStore(
		{
			profile: {
				status: 'loading',
			},
		},
		reducerMap,
	),
]

export const Error = Template.bind({})
Error.decorators = [
	withStore(
		{
			profile: {
				status: 'error',
				error: 'errors.no_profile',
			},
		},
		reducerMap,
	),
]
