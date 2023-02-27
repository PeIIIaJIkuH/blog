import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Sidebar } from './sidebar'

const componentMeta: ComponentMeta<typeof Sidebar> = {
	title: 'widgets/sidebar',
	component: Sidebar,
}

export default componentMeta

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Default = Template.bind({})
Default.args = {}
