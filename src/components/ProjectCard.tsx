import { Link } from 'react-router-dom';
import { TechBadge } from './TechBadge';

interface ProjectCardProps {
  slug: string;
  time: string;
  title: string;
  desc: string;
  tech: string[];
  meta?: string;
  viewDetailLabel?: string;
}

export function ProjectCard({ slug, time, title, desc, tech, meta, viewDetailLabel }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${slug}`}
      className="flex flex-col no-underline bg-white border border-gray-200 border-t-[3px] border-t-blue-600 rounded-2xl p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_36px_rgba(37,99,235,0.18)]"
    >
      <div className="text-[13px] font-semibold text-blue-600 font-mono mb-2">{time}</div>
      <div className="text-[19px] font-bold text-slate-900 mb-1.5">{title}</div>
      {meta && <div className="text-[13px] text-slate-500 mb-3.5">{meta}</div>}
      <p className="text-[14.5px] leading-relaxed text-slate-700 mb-4 flex-1">{desc}</p>
      <div className="flex gap-2 flex-wrap mb-4">
        {tech.map((t) => (
          <TechBadge key={t} label={t} size="sm" />
        ))}
      </div>
      {viewDetailLabel && <span className="text-sm font-semibold text-blue-600">{viewDetailLabel}</span>}
    </Link>
  );
}
