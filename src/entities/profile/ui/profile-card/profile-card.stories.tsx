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
		avatarImage: null,
		backgroundImage: null,
		currency: 'USD',
		balance: 0,
		country: 'country',
		city: 'city',
		birthDate: 'birthDate',
	},
}
