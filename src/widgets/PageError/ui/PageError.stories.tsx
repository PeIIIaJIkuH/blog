import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { PageError } from './PageError'

const componentMeta: ComponentMeta<typeof PageError> = {
	title: 'widgets/PageError',
	component: PageError,
}

export default componentMeta

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />

export const Default = Template.bind({})
Default.args = {}
