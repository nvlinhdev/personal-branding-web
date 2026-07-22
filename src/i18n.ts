import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import vi from './locales/vi.json';
import en from './locales/en.json';

const STORAGE_KEY = 'nvl-lang';

const storedLang = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;

void i18n
  .use(initReactI18next)
  .init({
    resources: {
      vi: { translation: vi },
      en: { translation: en },
    },
    lng: storedLang === 'en' ? 'en' : 'vi',
    fallbackLng: 'vi',
    interpolation: { escapeValue: false },
  });

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, lng);
    document.documentElement.lang = lng;
  }
});

export default i18n;
