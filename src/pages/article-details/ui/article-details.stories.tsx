import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleDetails } from './article-details'

const componentMeta: ComponentMeta<typeof ArticleDetails> = {
	title: 'pages/article-details',
	component: ArticleDetails,
}

export default componentMeta

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />

export const Default = Template.bind({})
Default.args = {}
