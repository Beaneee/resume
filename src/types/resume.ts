export interface ContactInfo {
  email: string;
  github: string;
  githubUrl: string;
}

export interface CoreCompetency {
  title: string;
  text: string;
  highlight?: string;
  suffix?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface AchievementDetail {
  text: string;
  highlight?: boolean;
}

export interface Achievement {
  title: string;
  details: AchievementDetail[];
}

export interface Project {
  title: string;
  period: string;
  description: string;
  tags: string[];
  achievements: Achievement[];
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  projects: Project[];
}

export interface Education {
  school: string;
  major: string;
  period: string;
}

export interface ResumeData {
  name: string;
  contact: ContactInfo;
  summary: string;
  coreCompetencies: CoreCompetency[];
  skills: SkillCategory[];
  experience: WorkExperience[];
  education: Education[];
}
