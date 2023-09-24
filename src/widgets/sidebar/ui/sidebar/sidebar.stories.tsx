import { useState } from '@storybook/addons'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Sidebar } from './sidebar'

const componentMeta: ComponentMeta<typeof Sidebar> = {
	title: 'widgets/sidebar',
	component: Sidebar,
	decorators: [
		(Story, { args }) => {
			const [isOpen, setIsOpen] = useState<boolean>(args.isOpen)
			const width = isOpen ? 240 : 80
			const toggle = () => {
				setIsOpen((prev) => !prev)
			}

			return <Story args={{ isOpen, width, toggle }} />
		},
	],
}

export default componentMeta

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Open = Template.bind({})
Open.args = {
	isOpen: true,
}

export const Collapsed = Template.bind({})
Collapsed.args = {
	isOpen: false,
}
