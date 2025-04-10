import { memo, useState, useEffect } from 'react';
import MarkdownContent from './MarkdownContent';
import { Responsibility } from '../types/resume';
import { useAnnotation } from '../context/AnnotationContext';

interface AnnotatedTextProps {
  id: string;
  text: string;
  annotation?: Responsibility['annotation'];
}

/**
 * Component that displays text with an optional annotation that opens in a side panel
 * @param {string} id - Unique identifier for the annotation
 * @param {string} text - The text to display
 * @param {Object} annotation - Optional annotation data
 * @param {string} annotation.id - Unique identifier for the annotation
 * @param {string} annotation.title - Title of the annotation
 * @param {string} annotation.content - Markdown content of the annotation
 * @param {string} annotation.linkedText - Optional specific text portion to link
 */
const AnnotatedText = memo(({ id, text, annotation }: AnnotatedTextProps) => {
  const { openAnnotationId, openAnnotation, closeAnnotation } = useAnnotation();
  const [isAnimating, setIsAnimating] = useState(false);
  const isOpen = openAnnotationId === id;

  const handleOpen = () => {
    openAnnotation(id);
    requestAnimationFrame(() => {
      setIsAnimating(true);
    });
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      closeAnnotation();
    }, 300);
  };

  // Clean up animation state when component unmounts
  useEffect(() => {
    return () => {
      setIsAnimating(false);
    };
  }, []);

  if (!annotation) {
    return <span>{text}</span>;
  }

  // If linkedText is specified, only make that portion clickable
  if (annotation.linkedText) {
    const parts = text.split(annotation.linkedText);
    return (
      <>
        <span>
          {parts[0]}
          <button
            onClick={handleOpen}
            className="text-theme-hover hover:underline focus:outline-none focus:ring-2 focus:ring-theme-hover focus:ring-offset-2 focus:ring-offset-theme-bg"
            aria-expanded={isOpen}
            aria-controls={`annotation-${id}`}
          >
            {annotation.linkedText}
          </button>
          {parts[1]}
        </span>
        {isOpen && (
          <div
            id={`annotation-${id}`}
            className={`fixed inset-y-0 right-0 w-96 bg-theme-bg shadow-lg p-6 overflow-y-auto z-[60] transform transition-transform duration-300 ease-in-out ${
              isAnimating ? 'translate-x-0' : 'translate-x-full'
            }`}
            role="dialog"
            aria-labelledby={`annotation-title-${id}`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 id={`annotation-title-${id}`} className="text-xl font-semibold">
                {annotation.title}
              </h2>
              <button
                onClick={handleClose}
                className="text-theme-text hover:text-theme-hover focus:outline-none focus:ring-2 focus:ring-theme-hover focus:ring-offset-2 focus:ring-offset-theme-bg"
                aria-label="Close annotation"
              >
                ×
              </button>
            </div>
            <MarkdownContent content={annotation.content} />
          </div>
        )}
      </>
    );
  }

  // If no linkedText specified, make the entire text clickable
  return (
    <>
      <button
        onClick={handleOpen}
        className="text-theme-hover hover:underline focus:outline-none focus:ring-2 focus:ring-theme-hover focus:ring-offset-2 focus:ring-offset-theme-bg"
        aria-expanded={isOpen}
        aria-controls={`annotation-${id}`}
      >
        {text}
      </button>
      {isOpen && (
        <div
          id={`annotation-${id}`}
          className={`fixed inset-y-0 right-0 w-96 bg-theme-bg shadow-lg p-6 overflow-y-auto z-[60] transform transition-transform duration-300 ease-in-out ${
            isAnimating ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-labelledby={`annotation-title-${id}`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 id={`annotation-title-${id}`} className="text-xl font-semibold">
              {annotation.title}
            </h2>
            <button
              onClick={handleClose}
              className="text-theme-text hover:text-theme-hover focus:outline-none focus:ring-2 focus:ring-theme-hover focus:ring-offset-2 focus:ring-offset-theme-bg"
              aria-label="Close annotation"
            >
              ×
            </button>
          </div>
          <MarkdownContent content={annotation.content} />
        </div>
      )}
    </>
  );
});

AnnotatedText.displayName = 'AnnotatedText';

export default AnnotatedText; 