import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { cls } from 'shared/helpers/cls'
import { Button } from 'shared/ui/button'
import { Typography } from 'shared/ui/typography'

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
		<Button onClick={toggleLanguage} radius='sm' className={cls(s.languageSwitcher, className, short && s.short)}>
			<Typography
				as='span'
				className={cls(short ? s.hidden : s.visible)}
				text={t('language.translated.long')}
				weight={500}
			/>
			<Typography
				as='span'
				className={cls(short ? s.visible : s.hidden)}
				text={t('language.translated.short')}
				weight={500}
			/>
		</Button>
	)
})
