import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Profile } from './profile'

const componentMeta: ComponentMeta<typeof Profile> = {
	title: 'pages/profile',
	component: Profile,
}

export default componentMeta

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />

export const Default = Template.bind({})
Default.args = {}
