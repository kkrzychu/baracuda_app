import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en_lang from './translations/en';
import pl_lang from './translations/pl';
import de_lang from './translations/de';
import es_lang from './translations/es';
import cz_lang from './translations/cz';
import fr_lang from './translations/fr';
import ch_lang from './translations/ch';
import dk_lang from './translations/dk';
import it_lang from './translations/it';
import nl_lang from './translations/nl';
import no_lang from './translations/no';
import pt_lang from './translations/pt';
import se_lang from './translations/se';


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
        ch: {
          translation: ch_lang
        },
        cz: {
          translation: cz_lang
        },
        de: {
          translation: de_lang
        },
        dk: {
          translation: dk_lang
        },
        en: {
          translation: en_lang
        },
        es: {
          translation: es_lang
        },
        fr: {
          translation: fr_lang
        },
        it: {
          translation: it_lang
        },
        nl: {
          translation: nl_lang
        },
        no: {
          translation: no_lang
        },
        pl: {
          translation: pl_lang
        },
        pt: {
          translation: pt_lang
        },
        se: {
          translation: se_lang
        }
    }
  });

export default i18n;