import { DegreeType, PublicationType, TechnologyCategory, CompetencyCategory } from './enums';

export interface Annotation {
  id: string;
  title: string;
  content: string | React.ReactNode;
}

export interface AnnotatedText {
  text: string;
  annotation?: {
    id: string;
    title: string;
    content: string;
    linkedText?: string;
  };
}

export interface Responsibility {
  text: string;
  annotation?: {
    id: string;
    title: string;
    content: string;
    linkedText?: string;
  };
}

export interface Job {
  id: string;
  company: string;
  location: string;
  remote: boolean;
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
  responsibilities: Responsibility[];
}

export interface Publication {
  title: string;
  type: PublicationType;
  link?: string;
  description: string;
  date?: string;
  publisher?: string;
  annotation?: {
    id: string;
    title: string;
    content: string;
    linkedText?: string;
  };
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
  annotation?: {
    id: string;
    title: string;
    content: string;
    linkedText?: string;
  };
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
  summary: AnnotatedText;
  experience: Job[];
  education: School[];
  competencies: Competency[];
  technologies: Technology[];
  publications: Publication[];
} 