import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en_lang from './translations/en';
import pl_lang from './translations/pl';
import de_lang from './translations/de';
import es_lang from './translations/es';
import cz_lang from './translations/cz';
import fr_lang from './translations/fr';


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
        },
        de: {
          translation: de_lang
        },
        fr: {
          translation: fr_lang
        },
        es: {
          translation: es_lang
        },
        cz: {
          translation: cz_lang
        }
    }
  });

export default i18n;