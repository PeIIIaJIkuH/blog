import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { AppLink } from './AppLink'

const componentMeta: ComponentMeta<typeof AppLink> = {
	title: 'shared/AppLink',
	component: AppLink,
}

export default componentMeta

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
	color: 'primary',
	children: 'AppLink',
}

export const Secondary = Template.bind({})
Secondary.args = {
	color: 'secondary',
	children: 'AppLink',
}

export const Tertiary = Template.bind({})
Tertiary.args = {
	color: 'tertiary',
	children: 'AppLink',
}
