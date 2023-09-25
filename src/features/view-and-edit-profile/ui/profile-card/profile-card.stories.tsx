import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { ProfileCard } from './profile-card'

const componentMeta: ComponentMeta<typeof ProfileCard> = {
	title: 'features/view-and-edit-profiles/profile-card',
	component: ProfileCard,
}

export default componentMeta

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Default = Template.bind({})
Default.args = {
	profile: {
		id: 'id',
		username: 'username',
		email: 'email',
		role: 'user',
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
