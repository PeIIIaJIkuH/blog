import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

void i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
	fallbackLng: 'en',
	defaultNS: 'translation',
	debug: IS_DEV,
})

export default i18n
