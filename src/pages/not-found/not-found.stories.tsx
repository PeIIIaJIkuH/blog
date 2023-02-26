import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { NotFound } from '.'

const componentMeta: ComponentMeta<typeof NotFound> = {
	title: 'pages/not-found',
	component: NotFound,
}

export default componentMeta

const Template: ComponentStory<typeof NotFound> = (args) => <NotFound {...args} />

export const Default = Template.bind({})
Default.args = {}
