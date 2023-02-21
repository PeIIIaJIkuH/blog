import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

void i18n.use(initReactI18next).init({
	lng: 'en',
	fallbackLng: 'en',
	defaultNS: 'translation',
	debug: false,
	resources: { en: { translation: {} } },
})

export default i18n
