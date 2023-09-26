import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { CommentCard } from './comment-card'

const componentMeta: ComponentMeta<typeof CommentCard> = {
	title: 'entities/comment/comment-card',
	component: CommentCard,
}

export default componentMeta

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

export const UserWithAvatar = Template.bind({})
UserWithAvatar.args = {
	comment: {
		id: '1',
		content: 'This is a comment',
		articleId: '1',
		user: {
			id: '1',
			firstName: 'First name',
			lastName: 'Last name',
			role: 'user',
			birthDate: 'Birth date',
			email: 'Email',
			username: 'Username',
			country: 'Country',
			city: 'City',
			currency: 'Currency',
			balance: 100,
			backgroundUrl: 'https://placehold.co/600x400',
			avatarUrl: 'https://placehold.co/100',
		},
	},
}

export const UserWithoutAvatar = Template.bind({})
UserWithoutAvatar.args = {
	comment: {
		id: '1',
		content: 'This is a comment',
		articleId: '1',
		user: {
			id: '1',
			firstName: 'First name',
			lastName: 'Last name',
			role: 'user',
			birthDate: 'Birth date',
			email: 'Email',
			username: 'Username',
			country: 'Country',
			city: 'City',
			currency: 'Currency',
			balance: 100,
			backgroundUrl: 'https://placehold.co/600x400',
			avatarUrl: null,
		},
	},
}
