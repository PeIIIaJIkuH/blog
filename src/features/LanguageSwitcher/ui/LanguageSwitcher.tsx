import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { cls } from 'shared/helpers/cls'
import { Button } from 'shared/ui/Button'

import s from './LanguageSwitcher.module.scss'

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
		<Button onClick={toggleLanguage} radius='small' className={cls(s.LanguageSwitcher, className, short && s.short)}>
			<span className={cls(short ? s.hidden : s.visible)}>{t('main:language.translated.long')}</span>
			<span className={cls(short ? s.visible : s.hidden)}>{t('main:language.translated.short')}</span>
		</Button>
	)
}
