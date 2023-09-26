import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticlesPage } from './articles'

const componentMeta: ComponentMeta<typeof ArticlesPage> = {
	title: 'pages/articles',
	component: ArticlesPage,
}

export default componentMeta

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />

export const Default = Template.bind({})
Default.args = {}
