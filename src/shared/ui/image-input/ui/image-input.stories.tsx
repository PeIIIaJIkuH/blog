import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { ImageInput } from './image-input'
import s from './image-input.module.scss'

const componentMeta: ComponentMeta<typeof ImageInput> = {
	title: 'shared/image-input',
	component: ImageInput,
}

export default componentMeta

const Template: ComponentStory<typeof ImageInput> = (args) => <ImageInput {...args} />

export const WithButton = Template.bind({})
WithButton.args = {
	variant: 'changeButton',
	image: 'https://i.imgur.com/R6ovfev.jpeg',
	className: s.test,
}

export const WithOverlay = Template.bind({})
WithOverlay.args = {
	variant: 'overlay',
	image: 'https://i.imgur.com/R6ovfev.jpeg',
	className: s.test,
}
