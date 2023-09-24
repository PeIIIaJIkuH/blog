import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleCard } from './article-card'

const componentMeta: ComponentMeta<typeof ArticleCard> = {
	title: 'entities/article/article-card',
	component: ArticleCard,
}

export default componentMeta

const Template: ComponentStory<typeof ArticleCard> = (args) => <ArticleCard {...args} />

export const Default = Template.bind({})
Default.args = {
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
}
Default.decorators = [
	(Story) => (
		<div style={{ maxWidth: 600, margin: '0 auto' }}>
			<Story />
		</div>
	),
]
