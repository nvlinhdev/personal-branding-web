import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 text-slate-50 px-12 pt-[51px] pb-12 flex flex-col items-center gap-4">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 to-cyan-500" />
      <div className="flex gap-6 flex-wrap justify-center">
        <a href="https://github.com/nvlinhdev" target="_blank" rel="noreferrer" className="text-slate-50 no-underline text-sm hover:text-cyan-300">
          GitHub
        </a>
        <a href="https://linkedin.com/in/nvlinhdev" target="_blank" rel="noreferrer" className="text-slate-50 no-underline text-sm hover:text-cyan-300">
          LinkedIn
        </a>
        <a href="mailto:linhnv.work.dev@gmail.com" className="text-slate-50 no-underline text-sm hover:text-cyan-300">
          Email
        </a>
      </div>
      <div className="text-[13px] text-slate-400">© {year} {t('common.footer.name')}</div>
    </footer>
  );
}
