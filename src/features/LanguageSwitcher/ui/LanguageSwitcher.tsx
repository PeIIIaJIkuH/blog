import {cls} from '@shared/helpers/cls'

import {Button} from '@shared/ui/Button'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'

import s from './LanguageSwitcher.module.scss'

interface LanguageSwitcherProps {
	className?: string
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({className}) => {
	const {i18n, t} = useTranslation()

	const toggleLanguage = () => {
		const language = i18n.language === 'en' ? 'ru' : 'en'
		i18n.changeLanguage(language)
	}

	return (
		<Button onClick={toggleLanguage} className={cls(s.LanguageSwitcher, className)}>
			{t('change-language-title')}
		</Button>
	)
}
