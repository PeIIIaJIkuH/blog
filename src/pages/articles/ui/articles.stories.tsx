import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Articles } from './articles'

const componentMeta: ComponentMeta<typeof Articles> = {
	title: 'pages/articles',
	component: Articles,
}

export default componentMeta

const Template: ComponentStory<typeof Articles> = (args) => <Articles {...args} />

export const Default = Template.bind({})
Default.args = {}
