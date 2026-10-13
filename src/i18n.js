import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import esCommon from './locales/es/common.json';
import enCommon from './locales/en/common.json';
import esPages from './locales/es/pages.json';
import enPages from './locales/en/pages.json';
import esProjects from './locales/es/projects.json';
import enProjects from './locales/en/projects.json';
import esPeople from './locales/es/people.json';
import enPeople from './locales/en/people.json';

export const Language = Object.freeze({
	ES: 'es',
	EN: 'en'
});

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			[Language.ES]: {common: esCommon, pages: esPages, projects: esProjects, people: esPeople},
			[Language.EN]: {common: enCommon, pages: enPages, projects: enProjects, people: enPeople}
		},
		defaultNS: 'common',
		ns: ['common', 'pages', 'projects', 'people'],
		fallbackLng: Language.ES,
		interpolation: {
			escapeValue: false
		}
	});

export default i18n;
