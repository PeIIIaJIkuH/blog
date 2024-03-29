import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { articleDetailsReducer } from 'entities/article'
import { withStore } from 'shared/config/storybook'
import { type ReducerMap } from 'shared/hooks/use-lazy-module-loading'

import { ArticleDetailsPage } from './article-details'

const reducerMap: ReducerMap = {
	articleDetails: articleDetailsReducer,
}

const componentMeta: ComponentMeta<typeof ArticleDetailsPage> = {
	title: 'pages/article-details',
	component: ArticleDetailsPage,
}

export default componentMeta

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />

export const Default = Template.bind({})
Default.args = {}
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
Default.parameters = {
	router: {
		path: '/articles/:id',
		route: '/articles/1',
	},
}
