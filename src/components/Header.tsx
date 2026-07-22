import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import avatar from '../assets/avatar.jpg';

const iconLinkClass =
  'w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center font-mono text-[11px] font-bold text-slate-700 no-underline transition-all hover:border-blue-600 hover:text-blue-600 hover:-translate-y-0.5';

export function Header() {
  const { t } = useTranslation();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `no-underline text-[15px] ${isActive ? 'font-semibold text-blue-600' : 'font-medium text-slate-700'}`;

  return (
    <header className="flex items-center justify-between px-6 sm:px-12 py-5 border-b border-gray-200 bg-white/85 backdrop-blur-sm sticky top-0 z-10 flex-wrap gap-4">
      <NavLink to="/" className="flex items-center gap-2.5 no-underline">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 p-[2px] transition-transform duration-300 hover:scale-105">
          <img src={avatar} alt={t('common.footer.name')} className="w-full h-full rounded-full object-cover" />
        </div>
        <div className="font-bold text-base text-slate-900">{t('common.footer.name')}</div>
      </NavLink>

      <nav className="flex gap-8 flex-wrap">
        <NavLink to="/" end className={navLinkClass}>
          {t('common.nav.home')}
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          {t('common.nav.about')}
        </NavLink>
        <NavLink to="/projects" className={navLinkClass}>
          {t('common.nav.projects')}
        </NavLink>
        <NavLink to="/contact" className={navLinkClass}>
          {t('common.nav.contact')}
        </NavLink>
      </nav>

      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        <a href="https://github.com/nvlinhdev" target="_blank" rel="noreferrer" className={iconLinkClass}>
          GH
        </a>
        <a href="https://linkedin.com/in/nvlinhdev" target="_blank" rel="noreferrer" className={iconLinkClass}>
          in
        </a>
      </div>
    </header>
  );
}
