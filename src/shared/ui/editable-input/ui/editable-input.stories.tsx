import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { EditableInput } from './editable-input'

const componentMeta: ComponentMeta<typeof EditableInput> = {
	title: 'shared/editable-input',
	component: EditableInput,
}

export default componentMeta

const Template: ComponentStory<typeof EditableInput> = (args) => <EditableInput {...args} />

export const Default = Template.bind({})
Default.args = {
	initialValue: 'Editable input',
}
