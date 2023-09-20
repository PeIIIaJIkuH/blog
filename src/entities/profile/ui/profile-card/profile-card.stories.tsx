import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { ProfileCard } from './profile-card'

const componentMeta: ComponentMeta<typeof ProfileCard> = {
	title: 'entities/profile/profile-card',
	component: ProfileCard,
}

export default componentMeta

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Default = Template.bind({})
Default.args = {
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
}

export const Loading = Template.bind({})
Loading.args = {
	...Default.args,
	status: 'loading',
}

export const Error = Template.bind({})
Error.args = {
	...Default.args,
	status: 'error',
	error: 'error',
}
