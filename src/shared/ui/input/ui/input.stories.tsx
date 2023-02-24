import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Input } from './input'

const componentMeta: ComponentMeta<typeof Input> = {
	title: 'shared/input',
	component: Input,
}

export default componentMeta

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
	value: 'Default',
}

export const Clearable = Template.bind({})
Clearable.args = {
	value: 'Clearable',
	clearable: true,
}

export const Autofocus = Template.bind({})
Autofocus.args = {
	value: 'Autofocus',
	autoFocus: true,
}

export const Password = Template.bind({})
Password.args = {
	value: 'Password',
	type: 'password',
}
