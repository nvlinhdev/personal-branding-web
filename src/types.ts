export interface ProjectData {
  slug: string;
  time: string;
  title: string;
  role: string;
  team: string;
  homeDesc: string | null;
  listDesc: string;
  aboutDesc: string;
  detailDescription: string;
  responsibilities: string[];
  techShort: string[];
  techFull: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Stat {
  value: string;
  label: string;
}
