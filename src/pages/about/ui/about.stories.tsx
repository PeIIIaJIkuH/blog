import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { AboutPage } from './about'

const componentMeta: ComponentMeta<typeof AboutPage> = {
	title: 'pages/about',
	component: AboutPage,
}

export default componentMeta

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args} />

export const Default = Template.bind({})
Default.args = {}
