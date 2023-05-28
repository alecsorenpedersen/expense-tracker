import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';
import frTranslation from './locales/fr.json';
import csTranslation from './locales/cs.json';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				translation: enTranslation,
			},
			es: {
				translation: esTranslation,
			},
			fr: {
				translation: frTranslation,
			},
			cs: {
				translation: csTranslation,
			},
		},
		fallbackLng: 'en',
		debug: true,
		interpolation: {
			escapeValue: false,
		},
	});
export default i18n;
