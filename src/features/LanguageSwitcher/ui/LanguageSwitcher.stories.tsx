import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { LanguageSwitcher } from './LanguageSwitcher'

const componentMeta: ComponentMeta<typeof LanguageSwitcher> = {
	title: 'features/LanguageSwitcher',
	component: LanguageSwitcher,
}

export default componentMeta

const Template: ComponentStory<typeof LanguageSwitcher> = (args) => <LanguageSwitcher {...args} />

export const Long = Template.bind({})
Long.args = {}

export const Short = Template.bind({})
Short.args = {
	short: true,
}
