import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

const ns = ['main', 'home', 'about']
const supportedLngs = ['en', 'ru']
const resources = ns.reduce((acc, n) => {
	supportedLngs.forEach((lng) => {
		// @ts-ignore
		if (!acc[lng]) acc[lng] = {}
		// @ts-ignore
		acc[lng] = {
			// @ts-ignore
			...acc[lng],
			[n]: require(`../../public/locales/${lng}/${n}.json`),
		}
	})
	return acc
}, {})

void i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(Backend)
	.init({
		lng: 'en',
		fallbackLng: 'en',
		defaultNS: 'common',
		ns,
		interpolation: { escapeValue: false },
		react: { useSuspense: false },
		supportedLngs,
		resources,
	})

export default i18n
