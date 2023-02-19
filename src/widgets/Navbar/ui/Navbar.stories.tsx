import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Navbar } from './Navbar'

const componentMeta: ComponentMeta<typeof Navbar> = {
	title: 'widgets/Navbar',
	component: Navbar,
}

export default componentMeta

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {}
