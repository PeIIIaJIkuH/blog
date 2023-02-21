import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { PageError } from './page-error'

const componentMeta: ComponentMeta<typeof PageError> = {
	title: 'widgets/page-error',
	component: PageError,
}

export default componentMeta

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />

export const Default = Template.bind({})
Default.args = {}
