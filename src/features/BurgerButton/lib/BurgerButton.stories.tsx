import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { BurgerButton } from './BurgerButton'

const componentMeta: ComponentMeta<typeof BurgerButton> = {
	title: 'features/BurgerButton',
	component: BurgerButton,
	args: {
		isOpen: false,
		toggle: () => {},
	},
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
