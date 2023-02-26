import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { cls } from 'shared/helpers/cls'
import { Button } from 'shared/ui/button'

import s from './language-switcher.module.scss'

interface LanguageSwitcherProps {
	className?: string
	short?: boolean
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = memo(({ className, short = false }) => {
	const { i18n, t } = useTranslation()
	document.documentElement.lang = i18n.language

	const toggleLanguage = useCallback(async () => {
		const language = i18n.language === 'en' ? 'ru' : 'en'
		await i18n.changeLanguage(language)
	}, [i18n])

	return (
		<Button onClick={toggleLanguage} radius='small' className={cls(s.languageSwitcher, className, short && s.short)}>
			<span className={cls(short ? s.hidden : s.visible)}>{t('language.translated.long')}</span>
			<span className={cls(short ? s.visible : s.hidden)}>{t('language.translated.short')}</span>
		</Button>
	)
})
