import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TechBadge } from '../components/TechBadge';
import { useProject } from '../hooks/useProjects';

const metaBadge = 'font-mono text-[12.5px] font-semibold px-3.5 py-1.5 rounded-2xl';

export function ProjectDetail() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const project = useProject(slug);

  if (!project) {
    return (
      <section className="max-w-[800px] mx-auto px-6 sm:px-12 py-24 text-center">
        <h1 className="text-2xl font-bold mb-3">{t('projectDetail.notFound.title')}</h1>
        <p className="text-slate-700 mb-6">{t('projectDetail.notFound.subtitle')}</p>
        <Link to="/projects" className="text-sm font-semibold no-underline">
          {t('projectDetail.notFound.backLink')}
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="max-w-[800px] mx-auto px-6 sm:px-12 pt-14">
        <Link to="/projects" className="text-sm font-semibold no-underline">
          {t('projectDetail.backLink')}
        </Link>
      </section>

      <section className="max-w-[800px] mx-auto px-6 sm:px-12 pt-6 pb-10 border-b border-gray-200">
        <h1 className="text-[32px] font-extrabold mb-5 leading-[1.25]">{project.title}</h1>
        <div className="flex gap-3 flex-wrap">
          <span className={`${metaBadge} bg-blue-50 text-blue-600`}>{project.time}</span>
          <span className={`${metaBadge} bg-slate-100 text-slate-700`}>{project.role}</span>
          <span className={`${metaBadge} bg-slate-100 text-slate-700`}>{project.team}</span>
        </div>
      </section>

      <section className="max-w-[800px] mx-auto px-6 sm:px-12 py-10">
        <h2 className="text-xl font-bold mb-3.5">{t('projectDetail.descriptionTitle')}</h2>
        <p className="text-base leading-[1.8] text-slate-700 m-0">{project.detailDescription}</p>
      </section>

      <section className="max-w-[800px] mx-auto px-6 sm:px-12 pb-10">
        <h2 className="text-xl font-bold mb-4">{t('projectDetail.responsibilitiesTitle')}</h2>
        <ul className="m-0 pl-5 flex flex-col gap-3 list-disc">
          {project.responsibilities.map((r) => (
            <li key={r} className="text-[15px] leading-[1.7] text-slate-700">
              {r}
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-[800px] mx-auto px-6 sm:px-12 pb-[72px]">
        <h2 className="text-xl font-bold mb-4">{t('projectDetail.techTitle')}</h2>
        <div className="flex flex-wrap gap-2.5">
          {project.techFull.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      </section>

      <section className="max-w-[800px] mx-auto px-6 sm:px-12 pb-20">
        <Link
          to="/contact"
          className="inline-block px-7 py-3.5 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-[10px] no-underline font-semibold text-[15px] shadow-[0_8px_24px_rgba(37,99,235,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(37,99,235,0.4)]"
        >
          {t('projectDetail.contactCta')}
        </Link>
      </section>
    </>
  );
}
