import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import esTranslation from './locales/es.json';
import enTranslation from './locales/en.json';

export const Language = Object.freeze({
	ES: 'es',
	EN: 'en'
});

i18n
	.use(LanguageDetector) // Detecta el idioma preferido del navegador
	.use(initReactI18next) // Conecta con React
	.init({
		resources: {
			[Language.ES]: {translation: esTranslation},
			[Language.EN]: {translation: enTranslation}
		},
		fallbackLng: Language.ES, // Idioma por defecto
		interpolation: {
			escapeValue: false // React ya protege contra ataques XSS
		}
	});

export default i18n;