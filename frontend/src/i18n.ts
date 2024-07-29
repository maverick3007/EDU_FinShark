// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import kaTranslation from './locales/ka/translation.json';

const resources = {
    en: {
        translation: enTranslation,
    },
    ka: {
        translation: kaTranslation,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('language') || 'en', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // React already safes from xss
        },
    });

export default i18n;
