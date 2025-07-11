export interface PersonalInfo {
  name: string;
  title: string;
  email?: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-10
  category: "frontend" | "backend" | "general";
  years?: number;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies?: string[];
  location?: string;
}

export interface Project {
  name: string;
  company?: string;
  period: string;
  description: string;
  technologies: string[];
  role?: string;
  highlights?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export interface CVData {
  personalInfo: PersonalInfo;
  about: string;
  skills: {
    frontend: Skill[];
    backend: Skill[];
    general: Skill[];
  };
  experience: Experience[];
  projects: Project[];
  education?: Education[];
}
