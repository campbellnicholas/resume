import { memo } from 'react';
import { Annotation as AnnotationType } from '../types/resume';
import MarkdownContent from './MarkdownContent';

/**
 * Props for the Annotation component
 * @param annotation - The annotation data to display
 * @param onClose - Callback function when the annotation is closed
 */
interface AnnotationProps {
  annotation: AnnotationType;
  onClose: () => void;
}

/**
 * Component for displaying an individual annotation
 * @param annotation - The annotation data to display
 * @param onClose - Callback function when the annotation is closed
 */
const Annotation = memo(({ annotation, onClose }: AnnotationProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div 
        className="relative w-full max-w-2xl rounded-lg bg-theme-bg p-6 shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="annotation-title"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 
            id="annotation-title"
            className="text-xl font-semibold text-theme-text"
          >
            {annotation.title}
          </h2>
          <button
            onClick={onClose}
            className="text-theme-text hover:text-theme-hover focus:outline-none focus:ring-2 focus:ring-theme-hover rounded-full p-1"
            aria-label="Close annotation"
          >
            <svg 
              className="w-6 h-6" 
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
        <div className="prose prose-theme-text max-w-none">
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

export default Annotation; 