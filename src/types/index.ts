export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imagePlaceholder?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface AboutDetails {
  location: string;
  email: string;
  linkedin: string;
  status: string;
  gpa?: string;
}

