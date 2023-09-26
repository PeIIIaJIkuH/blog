import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { type User } from 'entities/user'
import { articleCommentsReducer } from 'features/article-comment'
import { withStore } from 'shared/config/storybook'
import { type ReducerMap } from 'shared/hooks/use-lazy-module-loading'

import { ArticleCommentsSection } from './article-comments-section'

const reducerMap: ReducerMap = {
	articleComments: articleCommentsReducer,
}

const componentMeta: ComponentMeta<typeof ArticleCommentsSection> = {
	title: 'widgets/article-comments-section',
	component: ArticleCommentsSection,
}

export default componentMeta

const Template: ComponentStory<typeof ArticleCommentsSection> = (args) => <ArticleCommentsSection {...args} />

const user1: User = {
	id: '1',
	firstName: 'First name',
	lastName: 'Last name',
	role: 'user',
	birthDate: 'Birth date',
	email: 'Email',
	username: 'User 1',
	country: 'Country',
	city: 'City',
	currency: 'Currency',
	balance: 100,
	backgroundUrl: 'https://placehold.co/600x400',
	avatarUrl: 'https://placehold.co/100',
}

const user2: User = {
	id: '2',
	firstName: 'First name',
	lastName: 'Last name',
	role: 'user',
	birthDate: 'Birth date',
	email: 'Email',
	username: 'User 2',
	country: 'Country',
	city: 'City',
	currency: 'Currency',
	balance: 100,
	backgroundUrl: 'https://placehold.co/600x400',
	avatarUrl: 'https://placehold.co/50',
}

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [
	withStore(
		{
			articleComments: {
				ids: ['1', '2'],
				entities: {
					'1': {
						id: '1',
						articleId: '1',
						content: 'Comment 1',
						user: user1,
					},
					'2': {
						id: '2',
						articleId: '1',
						content: 'Comment 2',
						user: user2,
					},
				},
			},
		},
		reducerMap,
	),
]
