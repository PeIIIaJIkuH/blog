import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { withStore } from 'shared/config/storybook'
import { type ReducerMap } from 'shared/hooks/use-lazy-module-loading'

import { articleDetailsReducer } from '../model/article-details-slice'

import { ViewArticleDetails } from './view-article-details'

const reducerMap: ReducerMap = {
	articleDetails: articleDetailsReducer,
}

const componentMeta: ComponentMeta<typeof ViewArticleDetails> = {
	title: 'features/view-article-details',
	component: ViewArticleDetails,
	decorators: [
		(Story) => (
			<div style={{ maxWidth: 600, margin: '0 auto' }}>
				<Story />
			</div>
		),
	],
}

export default componentMeta

const Template: ComponentStory<typeof ViewArticleDetails> = (args) => <ViewArticleDetails {...args} />

export const Default = Template.bind({})
Default.decorators = [
	withStore(
		{
			articleDetails: {
				article: {
					id: 'id',
					title: 'title',
					subtitle: 'subtitle',
					createdAt: 'createdAt',
					tags: ['tag1', 'tag2'],
					views: 100,
					imgUrl: 'https://placehold.co/600x400',
					blocks: [
						{
							type: 'text',
							data: {
								title: 'title',
								content: ['paragraph1', 'paragraph2'],
							},
						},
						{
							type: 'image',
							data: {
								url: 'https://placehold.co/600x400',
								caption: 'caption',
							},
						},
						{
							type: 'code',
							data: {
								code: 'line 1',
								language: 'language',
							},
						},
					],
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
			articleDetails: {
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
			articleDetails: {
				status: 'error',
				error: 'errors.no_article',
			},
		},
		reducerMap,
	),
]
