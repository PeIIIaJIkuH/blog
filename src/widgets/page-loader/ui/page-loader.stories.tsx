import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { PageLoader } from './page-loader'

const componentMeta: ComponentMeta<typeof PageLoader> = {
	title: 'widgets/page-loader',
	component: PageLoader,
}

export default componentMeta

const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader {...args} />

export const Default = Template.bind({})
Default.args = {}
