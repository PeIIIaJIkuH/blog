import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { AppLink } from './AppLink'

const componentMeta: ComponentMeta<typeof AppLink> = {
	title: 'shared/AppLink',
	component: AppLink,
}

export default componentMeta

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Default = Template.bind({})
Default.args = {
	children: 'AppLink',
}
