import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Navbar } from './Navbar'

const componentMeta: ComponentMeta<typeof Navbar> = {
	title: 'shared/Navbar',
	component: Navbar,
	argTypes: {},
}

export default componentMeta

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Primary = Template.bind({})
Primary.args = {}
