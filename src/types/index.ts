// Tipos para dados do perfil
export interface ProfileData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  github: string;
  linkedin: string;
  about: string[];
}

// Tipos para experiência
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
}

// Tipos para projetos
export interface Project {
  id: string;
  name: string;
  description: string;
  link: string;
  image: string;
  tech: string[];
}

// Tipos para educação
export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

// Tipos para habilidades
export interface SkillCategory {
  category: string;
  skills: string[];
}

// Tipos para seções de navegação
export type SectionId = 'about' | 'experience' | 'projects' | 'skills' | 'education';

export interface NavItem {
  id: SectionId;
  label: string;
}

// Props dos componentes principais
export interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export interface NavigationProps {
  sections: NavItem[];
  activeSection: SectionId;
  onSectionClick: (sectionId: SectionId) => void;
}

export interface SectionProps {
  className?: string;
}

export interface ExperienceSectionProps extends SectionProps {
  experience: Experience[];
}

export interface ProjectsSectionProps extends SectionProps {
  projects: Project[];
}

export interface SkillsSectionProps extends SectionProps {
  skills: Record<string, string[]>;
}

export interface EducationSectionProps extends SectionProps {
  education: Education[];
}