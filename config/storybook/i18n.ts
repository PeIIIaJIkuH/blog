import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

type Namespace = 'translation' | 'home' | 'about' | 'profile'
type Language = 'en' | 'ru'

const namespaces: Namespace[] = ['translation', 'home', 'about', 'profile']
const languages: Language[] = ['en', 'ru']

const resources: Partial<Record<Language, Partial<Record<Namespace, object>>>> = {}

for (const language of languages) {
	for (const namespace of namespaces) {
		if (!resources[language]) {
			resources[language] = {}
		}
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		resources[language]![namespace] = require(`../../public/locales/${language}/${namespace}.json`)
	}
}

void i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(Backend)
	.init({
		lng: 'en',
		fallbackLng: 'en',
		defaultNS: 'translation',
		ns: namespaces,
		interpolation: { escapeValue: false },
		react: { useSuspense: false },
		supportedLngs: languages,
		resources,
	})

export default i18n
