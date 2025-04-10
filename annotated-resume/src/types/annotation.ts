/**
 * Interface for annotation data
 * @param id - Unique identifier for the annotation
 * @param title - Title of the annotation
 * @param content - Markdown content of the annotation
 */
export interface Annotation {
  id: string;
  title: string;
  content: string;
} 