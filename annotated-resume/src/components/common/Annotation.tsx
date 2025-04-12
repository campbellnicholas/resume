import { memo } from 'react';
import { Annotation as AnnotationType } from '../../types/resume';
import MarkdownContent from './MarkdownContent';

/**
 * Props for the Annotation component
 * @param annotation - The annotation data to display
 * @param onClose - Callback function when the annotation is closed
 */
interface AnnotationProps {
  readonly annotation: AnnotationType;
  readonly onClose: () => void;
}

/**
 * Renders an annotation in a side panel
 * @param annotation - The annotation data to display
 * @param onClose - Callback when the annotation is closed
 * @returns A side panel containing the annotation content
 */
const Annotation = memo(({ annotation, onClose }: AnnotationProps): React.ReactElement => {
  return (
    <div 
      className="h-full bg-theme-bg border-l border-theme-border shadow-lg"
      role="dialog"
      aria-modal="true"
      aria-labelledby="annotation-title"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-theme-border p-4">
          <p 
            id="annotation-title"
            className="font-semibold text-theme-text"
          >
            {annotation.title}
          </p>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-theme-text hover:bg-theme-hover focus:outline-none focus:ring-2 focus:ring-theme-text"
            aria-label="Close annotation"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {typeof annotation.content === 'string' ? (
            <MarkdownContent content={annotation.content} />
          ) : (
            annotation.content
          )}
        </div>
      </div>
    </div>
  );
});

Annotation.displayName = 'Annotation';

export { Annotation }; 