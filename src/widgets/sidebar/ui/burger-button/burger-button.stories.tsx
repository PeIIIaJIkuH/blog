import { useState } from '@storybook/addons'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { BurgerButton } from './burger-button'

const componentMeta: ComponentMeta<typeof BurgerButton> = {
	title: 'widgets/sidebar/burger-button',
	component: BurgerButton,
	decorators: [
		(Story, { args }) => {
			const [isOpen, setIsOpen] = useState<boolean>(args.isOpen)
			const toggle = () => {
				setIsOpen((prev) => !prev)
			}

			return <Story args={{ isOpen, toggle }} />
		},
	],
}

export default componentMeta

const Template: ComponentStory<typeof BurgerButton> = (args) => <BurgerButton {...args} />

export const Closed = Template.bind({})
Closed.args = {
	isOpen: false,
}

export const Open = Template.bind({})
Open.args = {
	isOpen: true,
}
