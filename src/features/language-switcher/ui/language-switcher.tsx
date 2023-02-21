import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { cls } from 'shared/helpers/cls'
import { Button } from 'shared/ui/button'

import s from './language-switcher.module.scss'

interface LanguageSwitcherProps {
	className?: string
	short?: boolean
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className, short = false }) => {
	const { i18n, t } = useTranslation()

	const toggleLanguage = async () => {
		const language = i18n.language === 'en' ? 'ru' : 'en'
		await i18n.changeLanguage(language)
	}

	return (
		<Button onClick={toggleLanguage} radius='small' className={cls(s.languageSwitcher, className, short && s.short)}>
			<span className={cls(short ? s.hidden : s.visible)}>{t('language.translated.long')}</span>
			<span className={cls(short ? s.visible : s.hidden)}>{t('language.translated.short')}</span>
		</Button>
	)
}
