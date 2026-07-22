import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TechBadge } from '../components/TechBadge';
import { ProjectCard } from '../components/ProjectCard';
import { useProjects } from '../hooks/useProjects';
import type { Stat } from '../types';
import avatar from '../assets/avatar.jpg';

export function Home() {
  const { t } = useTranslation();
  const projects = useProjects();
  const stats = t('home.stats', { returnObjects: true }) as Stat[];
  const techStack = t('home.techStack', { returnObjects: true }) as string[];
  const featuredSlugs = t('home.featuredSlugs', { returnObjects: true }) as string[];
  const featuredProjects = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      {/* Hero */}
      <section
        className="relative max-w-[1120px] mx-auto px-6 sm:px-12 pt-24 pb-[72px] flex items-center gap-16 flex-wrap"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.14) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
          backgroundPosition: '-10px -10px',
        }}
      >
        <div className="flex-1 min-w-[320px]">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 font-mono text-[13px] font-semibold mb-6">
            {t('home.badge')}
          </div>
          <h1
            className="text-[40px] sm:text-[56px] font-extrabold leading-[1.1] mb-5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-shift"
          >
            {t('home.name')}
          </h1>
          <p className="text-lg leading-[1.75] text-slate-700 mb-8 max-w-[560px]">{t('home.bio')}</p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/projects"
              className="px-7 py-3.5 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-[10px] no-underline font-semibold text-[15px] shadow-[0_8px_24px_rgba(37,99,235,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(37,99,235,0.4)]"
            >
              {t('home.ctaProjects')}
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3.5 border border-slate-300 text-slate-900 rounded-[10px] no-underline font-semibold text-[15px] transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:-translate-y-1"
            >
              {t('home.ctaContact')}
            </Link>
          </div>
        </div>
        <div className="relative w-[200px] h-[200px] flex-shrink-0">
          <div className="absolute -inset-5 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 blur-[22px] animate-glow-pulse" />
          <div className="relative w-[200px] h-[200px] rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 p-1.5 animate-float-y">
            <img src={avatar} alt={t('home.name')} className="w-full h-full rounded-full object-cover" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#f5f9ff] border-y border-gray-200 py-10 px-6 sm:px-12">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center transition-transform duration-300 hover:-translate-y-1 ${
                i === 1 ? 'sm:border-x sm:border-[#dbe4f3]' : ''
              }`}
            >
              <div className="text-[36px] font-extrabold text-blue-600">{s.value}</div>
              <div className="text-sm text-slate-700 mt-1.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="max-w-[1120px] mx-auto px-6 sm:px-12 py-[72px]">
        <h2 className="text-[26px] font-bold text-slate-900 mb-6">{t('home.techStackTitle')}</h2>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-[#f5f9ff] border-t border-gray-200 px-6 sm:px-12 py-[72px]">
        <div className="max-w-[1120px] mx-auto">
          <div className="flex justify-between items-baseline mb-8 flex-wrap gap-3">
            <h2 className="text-[26px] font-bold text-slate-900 m-0">{t('home.featuredTitle')}</h2>
            <Link to="/projects" className="text-[15px] font-semibold no-underline">
              {t('home.viewAllProjects')}
            </Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-6">
            {featuredProjects.map((p) => (
              <ProjectCard
                key={p.slug}
                slug={p.slug}
                time={p.time}
                title={p.title}
                desc={p.homeDesc ?? p.listDesc}
                tech={p.techShort}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative max-w-[1120px] mx-auto px-6 sm:px-12 py-20 text-center overflow-hidden">
        <h2 className="text-[30px] font-extrabold text-slate-900 mb-4">{t('home.closing.title')}</h2>
        <p className="text-base text-slate-700 mb-8">{t('home.closing.subtitle')}</p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3.5 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-[10px] no-underline font-semibold text-[15px] shadow-[0_10px_26px_rgba(37,99,235,0.3)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_14px_32px_rgba(37,99,235,0.42)]"
        >
          {t('home.closing.button')}
        </Link>
      </section>
    </>
  );
}
