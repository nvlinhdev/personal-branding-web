import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function NotFound() {
  const { t } = useTranslation();

  return (
    <section className="max-w-[760px] mx-auto px-6 sm:px-12 py-32 text-center">
      <h1 className="text-3xl font-extrabold mb-4">{t('notFound.title')}</h1>
      <p className="text-slate-700 mb-8">{t('notFound.subtitle')}</p>
      <Link
        to="/"
        className="inline-block px-7 py-3.5 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-[10px] no-underline font-semibold text-[15px]"
      >
        {t('notFound.backHome')}
      </Link>
    </section>
  );
}
