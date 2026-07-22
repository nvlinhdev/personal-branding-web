import { useTranslation } from 'react-i18next';
import { TechBadge } from '../components/TechBadge';
import { TimelineItem } from '../components/TimelineItem';
import { useProjects } from '../hooks/useProjects';
import type { SkillGroup } from '../types';

export function About() {
  const { t } = useTranslation();
  const projects = useProjects();
  const skillGroups = t('about.skillGroups', { returnObjects: true }) as SkillGroup[];

  return (
    <>
      <section className="max-w-[920px] mx-auto px-6 sm:px-12 pt-[72px] pb-12">
        <div className="font-mono text-[13px] font-semibold text-blue-600 mb-4">{t('about.eyebrow')}</div>
        <h1 className="text-[38px] font-extrabold mb-6 inline-block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          {t('about.title')}
        </h1>
        <p className="text-[17px] leading-[1.8] text-slate-700 m-0">{t('about.bio')}</p>
      </section>

      <section className="max-w-[920px] mx-auto px-6 sm:px-12 pb-14">
        <div className="bg-[#f5f9ff] border border-gray-200 rounded-[14px] px-8 py-7 flex justify-between flex-wrap gap-4 transition-shadow duration-300 hover:shadow-[0_14px_30px_rgba(37,99,235,0.14)]">
          <div>
            <div className="text-xs font-semibold text-slate-500 tracking-wide mb-1">{t('about.education.label')}</div>
            <div className="text-lg font-bold">{t('about.education.school')}</div>
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-500 tracking-wide mb-1">{t('about.education.majorLabel')}</div>
            <div className="text-lg font-bold">{t('about.education.major')}</div>
          </div>
        </div>
      </section>

      <section className="max-w-[920px] mx-auto px-6 sm:px-12 pb-[72px]">
        <h2 className="text-[26px] font-bold mb-7">{t('about.skillsTitle')}</h2>
        <div className="flex flex-col gap-6">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <div className="text-sm font-bold text-slate-900 mb-2.5">{group.label}</div>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <TechBadge key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f5f9ff] border-t border-gray-200 px-6 sm:px-12 py-[72px]">
        <div className="max-w-[920px] mx-auto">
          <h2 className="text-[26px] font-bold mb-10">{t('about.experienceTitle')}</h2>
          <div className="relative pl-7 border-l-2 border-[#dbe4f3]">
            {projects.map((p) => (
              <TimelineItem key={p.slug} time={p.time} title={p.title} meta={`${p.role} · ${p.team}`} desc={p.aboutDesc} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
