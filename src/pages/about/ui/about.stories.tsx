import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { About } from './about'

const componentMeta: ComponentMeta<typeof About> = {
	title: 'pages/about',
	component: About,
}

export default componentMeta

const Template: ComponentStory<typeof About> = (args) => <About {...args} />

export const Default = Template.bind({})
Default.args = {}
