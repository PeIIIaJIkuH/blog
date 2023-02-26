import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Home } from './home'

const componentMeta: ComponentMeta<typeof Home> = {
	title: 'pages/home',
	component: Home,
}

export default componentMeta

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />

export const Default = Template.bind({})
Default.args = {}
