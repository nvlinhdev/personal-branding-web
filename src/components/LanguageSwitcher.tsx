import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language === 'en' ? 'en' : 'vi';

  const tabClass = (lang: 'vi' | 'en') =>
    `px-2.5 py-1.5 font-mono text-xs font-semibold transition-colors ${
      current === lang ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white' : 'text-slate-500 hover:text-slate-700'
    }`;

  return (
    <div className="flex rounded-lg border border-gray-200 overflow-hidden">
      <button type="button" onClick={() => void i18n.changeLanguage('vi')} className={tabClass('vi')}>
        VI
      </button>
      <button type="button" onClick={() => void i18n.changeLanguage('en')} className={tabClass('en')}>
        EN
      </button>
    </div>
  );
}
