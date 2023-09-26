import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { NotFoundPage } from './not-found'

const componentMeta: ComponentMeta<typeof NotFoundPage> = {
	title: 'pages/not-found',
	component: NotFoundPage,
}

export default componentMeta

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />

export const Default = Template.bind({})
Default.args = {}
