import { useTranslation } from 'react-i18next';
import { ProjectCard } from '../components/ProjectCard';
import { useProjects } from '../hooks/useProjects';

export function Projects() {
  const { t } = useTranslation();
  const projects = useProjects();

  return (
    <>
      <section className="max-w-[1120px] mx-auto px-6 sm:px-12 pt-[72px] pb-4">
        <div className="font-mono text-[13px] font-semibold text-blue-600 mb-4">{t('projects.eyebrow')}</div>
        <h1 className="text-[38px] font-extrabold mb-3 inline-block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          {t('projects.title')}
        </h1>
        <p className="text-base text-slate-700 mb-12 max-w-[640px]">{t('projects.subtitle')}</p>
      </section>

      <section className="max-w-[1120px] mx-auto px-6 sm:px-12 pb-24">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
          {projects.map((p) => (
            <ProjectCard
              key={p.slug}
              slug={p.slug}
              time={p.time}
              title={p.title}
              meta={`${p.role} · ${p.team}`}
              desc={p.listDesc}
              tech={p.techShort}
              viewDetailLabel={t('projects.viewDetail')}
            />
          ))}
        </div>
      </section>
    </>
  );
}
