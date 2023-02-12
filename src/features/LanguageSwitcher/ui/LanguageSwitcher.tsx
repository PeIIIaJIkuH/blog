import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { cls } from 'shared/helpers/cls'
import { Button } from 'shared/ui/Button'

interface LanguageSwitcherProps {
	className?: string
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
	const { i18n, t } = useTranslation()

	const toggleLanguage = async () => {
		const language = i18n.language === 'en' ? 'ru' : 'en'
		await i18n.changeLanguage(language)
	}

	return (
		<Button onClick={toggleLanguage} className={cls(className)}>
			{t('main:language.translated')}
		</Button>
	)
}
