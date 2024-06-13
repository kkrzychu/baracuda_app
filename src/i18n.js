import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en_lang from './translations/en';
import pl_lang from './translations/pl';
// import Backend from 'i18next-http-backend';


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
        escapeValue: false,
      },
    resources: {
        en: {
            translation: en_lang
        },
        pl: {
            translation: pl_lang
        }
    }
  });

export default i18n;