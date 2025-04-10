import { memo, useState } from 'react';
import MarkdownContent from './MarkdownContent';
import { useAnnotation } from '../context/AnnotationContext';

interface AnnotatedTextProps {
  text: string;
  annotation?: {
    id: string;
    title: string;
    content: string;
    linkedText?: string;
  };
  annotations?: Array<{
    id: string;
    title: string;
    content: string;
    linkedText?: string;
  }>;
}

/**
 * Component that displays text with optional annotations that open in a side panel
 * @param {string} text - The text to display
 * @param {Object} annotation - Optional single annotation
 * @param {Array} annotations - Optional array of annotations
 */
const AnnotatedText = memo(({ text, annotation, annotations }: AnnotatedTextProps) => {
  const { openAnnotationId, openAnnotation, closeAnnotation } = useAnnotation();
  const [isAnimating, setIsAnimating] = useState(false);

  // Convert single annotation to array if needed
  const allAnnotations = annotations || (annotation ? [annotation] : []);

  if (!allAnnotations || allAnnotations.length === 0) {
    return <span>{text}</span>;
  }

  // Sort annotations by position in text to ensure correct order
  const sortedAnnotations = [...allAnnotations].sort((a, b) => {
    const aIndex = a.linkedText ? text.indexOf(a.linkedText) : -1;
    const bIndex = b.linkedText ? text.indexOf(b.linkedText) : -1;
    return aIndex - bIndex;
  });

  let currentText = text;
  const parts: Array<string | { text: string; annotationId: string }> = [];

  // Split text by annotations
  sortedAnnotations.forEach((annotation) => {
    if (!annotation.linkedText) {
      parts.push({ text: text, annotationId: annotation.id });
      currentText = '';
      return;
    }
    const index = currentText.indexOf(annotation.linkedText);
    if (index === -1) return;
    
    const before = currentText.slice(0, index);
    const after = currentText.slice(index + annotation.linkedText.length);
    
    if (before) parts.push(before);
    parts.push({ text: annotation.linkedText, annotationId: annotation.id });
    currentText = after;
  });
  if (currentText) parts.push(currentText);

  const handleAnnotationClick = (annotationId: string) => {
    if (openAnnotationId === annotationId) {
      setIsAnimating(false);
      setTimeout(() => {
        closeAnnotation();
      }, 300);
    } else {
      openAnnotation(annotationId);
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    }
  };

  return (
    <span>
      {parts.map((part, index) => {
        if (typeof part === 'string') {
          return <span key={index}>{part}</span>;
        }
        const isOpen = openAnnotationId === part.annotationId;
        return (
          <button
            key={index}
            onClick={() => handleAnnotationClick(part.annotationId)}
            className={`text-theme-hover hover:underline focus:outline-none focus:ring-2 focus:ring-theme-hover focus:ring-offset-2 focus:ring-offset-theme-bg ${
              isOpen ? 'font-semibold' : ''
            }`}
            aria-expanded={isOpen}
            aria-controls={`annotation-${part.annotationId}`}
          >
            {part.text}
          </button>
        );
      })}
      {allAnnotations.map((annotation) => {
        const isOpen = openAnnotationId === annotation.id;
        return (
          isOpen && (
            <div
              key={annotation.id}
              id={`annotation-${annotation.id}`}
              className={`fixed inset-y-0 right-0 w-96 bg-theme-bg shadow-lg p-6 overflow-y-auto z-[60] transform transition-transform duration-300 ease-in-out ${
                isAnimating ? 'translate-x-0' : 'translate-x-full'
              }`}
              role="dialog"
              aria-labelledby={`annotation-title-${annotation.id}`}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 id={`annotation-title-${annotation.id}`} className="font-semibold">
                  {annotation.title}
                </h2>
                <button
                  onClick={() => handleAnnotationClick(annotation.id)}
                  className="text-theme-text hover:text-theme-hover focus:outline-none focus:ring-2 focus:ring-theme-hover focus:ring-offset-2 focus:ring-offset-theme-bg"
                  aria-label="Close annotation"
                >
                  ×
                </button>
              </div>
              <MarkdownContent content={annotation.content} />
            </div>
          )
        );
      })}
    </span>
  );
});

AnnotatedText.displayName = 'AnnotatedText';

export default AnnotatedText; 