import { useState, useRef, useEffect } from 'react';
import { Annotation as AnnotationType, ID } from '../../types/resume';
import { ErrorBoundary } from './ErrorBoundary';
import { Annotation } from './Annotation';

interface AnnotatedTextProps {
  readonly text: string;
  readonly annotations?: ReadonlyArray<{
    readonly id: ID;
    readonly title: string;
    readonly content: string;
    readonly linkedText: string;
  }>;
}

/**
 * Component for displaying text with inline annotations
 * @param text - The main text content
 * @param annotations - Optional array of annotations
 */
const AnnotatedText = ({ text, annotations = [] }: AnnotatedTextProps): React.ReactElement => {
  const [selectedAnnotation, setSelectedAnnotation] = useState<AnnotationType | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  // Sort annotations by their position in the text
  const sortedAnnotations = [...annotations].sort((a, b) => {
    const aIndex = text.indexOf(a.linkedText);
    const bIndex = text.indexOf(b.linkedText);
    return aIndex - bIndex;
  });

  // Split text into parts based on annotation positions
  const parts: Array<{ text: string; annotation?: AnnotationType }> = [];
  let lastIndex = 0;

  sortedAnnotations.forEach(annotation => {
    const index = text.indexOf(annotation.linkedText, lastIndex);
    if (index !== -1) {
      // Add text before annotation
      if (index > lastIndex) {
        parts.push({ text: text.slice(lastIndex, index) });
      }
      // Add annotation
      parts.push({ text: annotation.linkedText, annotation });
      lastIndex = index + annotation.linkedText.length;
    }
  });

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex) });
  }

  const handleAnnotationClick = (annotation: AnnotationType): void => {
    setSelectedAnnotation(annotation);
    setIsAnimating(true);
    // Start with panel off-screen
    setIsPanelOpen(false);
    // Use requestAnimationFrame to ensure the initial render happens first
    requestAnimationFrame(() => {
      // Then slide it in
      setIsPanelOpen(true);
    });
  };

  const handleClose = (): void => {
    setIsAnimating(true);
    setIsPanelOpen(false);
    // Wait for animation to complete before clearing the annotation
    setTimeout(() => {
      setSelectedAnnotation(null);
      setIsAnimating(false);
    }, 300); // Match this with the transition duration
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (textRef.current && !textRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <ErrorBoundary>
      <span ref={textRef}>
        {parts.map((part, index) => {
          if (part.annotation) {
            return (
              <button
                key={index}
                onClick={() => handleAnnotationClick(part.annotation!)}
                className="annotation-linked-text text-theme-hover"
                aria-label={`Learn more about ${part.text}`}
              >
                {part.text}
              </button>
            );
          }
          return <span key={index}>{part.text}</span>;
        })}
        {(isPanelOpen || isAnimating) && selectedAnnotation && (
          <div 
            className={`fixed inset-y-0 right-0 z-50 w-96 transform transition-transform duration-300 ease-in-out ${
              isPanelOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <Annotation 
              annotation={selectedAnnotation}
              onClose={handleClose}
            />
          </div>
        )}
      </span>
    </ErrorBoundary>
  );
};

export { AnnotatedText }; 