import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Sidebar } from './Sidebar'

const componentMeta: ComponentMeta<typeof Sidebar> = {
	title: 'widgets/Sidebar',
	component: Sidebar,
}

export default componentMeta

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Default = Template.bind({})
Default.args = {}
