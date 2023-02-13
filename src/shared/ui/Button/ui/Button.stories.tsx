import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Button } from './Button'

const componentMeta: ComponentMeta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
	argTypes: {},
}

export default componentMeta

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	children: 'Button',
}

export const Clear = Template.bind({})
Clear.args = {
	children: 'Button',
	theme: 'clear',
}
