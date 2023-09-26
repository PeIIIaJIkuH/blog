import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { withStore } from 'shared/config/storybook'
import { type ReducerMap } from 'shared/hooks/use-lazy-module-loading'

import { articleCommentsReducer } from '../../model/slices/article-comments.slice'

import { ArticleComments } from './article-comments'

const reducerMap: ReducerMap = {
	articleComments: articleCommentsReducer,
}

const componentMeta: ComponentMeta<typeof ArticleComments> = {
	title: 'features/article-comment/article-comments',
	component: ArticleComments,
}

export default componentMeta

const Template: ComponentStory<typeof ArticleComments> = (args) => <ArticleComments {...args} />

export const Default = Template.bind({})
Default.decorators = [
	withStore(
		{
			articleComments: {
				ids: ['1', '2'],
				entities: {
					'1': {
						id: '1',
						content: 'This is a comment 1',
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
					'2': {
						id: '2',
						content: 'This is a comment 2',
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
			articleComments: {
				ids: [],
				entities: {},
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
			articleComments: {
				ids: [],
				entities: {},
				status: 'error',
				error: 'errors.no_comments',
			},
		},
		reducerMap,
	),
]
