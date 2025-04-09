import { DegreeType, JobType, PublicationType, TechnologyCategory, CompetencyCategory } from './enums';

export interface Job {
  id: string;
  company: string;
  location: string;
  isRemote?: boolean;
  type?: JobType;
  positions: Position[];
}

export interface School {
  id: string;
  school: string;
  degree: DegreeType;
  fieldOfStudy: string;
  location: string;
  graduationYear?: number;
}

export interface Position {
  title: string;
  team?: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Publication {
  title: string;
  type: PublicationType;
  link?: string;
  description: string;
  date?: string;
  publisher?: string;
}

export interface Technology {
  name: string;
  category: TechnologyCategory;
  proficiency?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface Competency {
  name: string;
  category: CompetencyCategory;
  description?: string;
}

export interface ContactInfo {
  city: string;
  linkedIn: {
    url: string;
    displayText: string;
  };
  email?: string;
  phone?: string;
  website?: string;
}

export interface ResumeData {
  name: string;
  contact: ContactInfo;
  summary: string;
  experience: Job[];
  education: School[];
  competencies: Competency[];
  technologies: Technology[];
  publications: Publication[];
} 