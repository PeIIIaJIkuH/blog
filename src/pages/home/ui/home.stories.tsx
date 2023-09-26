import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { HomePage } from './home'

const componentMeta: ComponentMeta<typeof HomePage> = {
	title: 'pages/home',
	component: HomePage,
}

export default componentMeta

const Template: ComponentStory<typeof HomePage> = (args) => <HomePage {...args} />

export const Default = Template.bind({})
Default.args = {}
