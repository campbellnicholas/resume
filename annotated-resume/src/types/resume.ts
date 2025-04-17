import { DegreeType, PublicationType, TechnologyCategory, CompetencyCategory } from './enums';

// Branded type for IDs to prevent mixing different types of IDs
export type ID = string & { readonly __brand: unique symbol };

// Helper function to create IDs
export const createID = (id: string): ID => id as ID;

// Type guard for IDs
export const isID = (value: unknown): value is ID => typeof value === 'string';

export interface Annotation {
  readonly id: ID;
  readonly title: string;
  readonly content: string | React.ReactNode;
}

export interface AnnotatedText {
  readonly text: string;
  readonly annotations?: ReadonlyArray<{
    readonly id: ID;
    readonly title: string;
    readonly content: string;
    readonly linkedText: string;
  }>;
}

export interface Responsibility {
  readonly text: string;
  readonly annotations?: ReadonlyArray<{
    readonly id: ID;
    readonly title: string;
    readonly content: string;
    readonly linkedText?: string;
  }>;
}

export interface Job {
  readonly id: ID;
  readonly company: string;
  readonly location: string;
  readonly remote: boolean;
  readonly positions: ReadonlyArray<Position>;
}

export interface School {
  readonly id: ID;
  readonly school: string;
  readonly degree: DegreeType;
  readonly fieldOfStudy: string;
  readonly location: string;
  readonly graduationYear?: number;
}

export interface Position {
  readonly title: string;
  readonly team?: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly responsibilities: ReadonlyArray<Responsibility>;
}

export interface Publication {
  readonly title: string;
  readonly type: PublicationType;
  readonly link?: string;
  readonly description: string;
  readonly date?: string;
  readonly publisher?: string;
  readonly annotations?: ReadonlyArray<{
    readonly id: ID;
    readonly title: string;
    readonly content: string;
    readonly linkedText?: string;
  }>;
}

export interface Technology {
  readonly name: string;
  readonly category: TechnologyCategory;
  readonly proficiency?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface Competency {
  readonly name: string;
  readonly category: CompetencyCategory;
  readonly description?: string;
  readonly annotations?: ReadonlyArray<{
    readonly id: ID;
    readonly title: string;
    readonly content: string;
    readonly linkedText?: string;
  }>;
}

export interface ContactInfo {
  readonly city: string;
  readonly linkedIn: {
    readonly url: string;
    readonly displayText: string;
  };
  readonly github: {
    readonly url: string;
    readonly displayText: string;
  };
  readonly email?: string;
  readonly phone?: string;
  readonly website?: string;
}

export interface ResumeData {
  readonly name: string;
  readonly contact: ContactInfo;
  readonly summary: AnnotatedText;
  readonly experience: ReadonlyArray<Job>;
  readonly education: ReadonlyArray<School>;
  readonly competencies: ReadonlyArray<Competency>;
  readonly technologies: ReadonlyArray<Technology>;
  readonly publications: ReadonlyArray<Publication>;
} 