import { useTranslation } from 'react-i18next';
import type { ProjectData } from '../types';

export function useProjects(): ProjectData[] {
  const { t } = useTranslation();
  return t('projectsData', { returnObjects: true }) as ProjectData[];
}

export function useProject(slug: string | undefined): ProjectData | undefined {
  const projects = useProjects();
  return projects.find((p) => p.slug === slug);
}
