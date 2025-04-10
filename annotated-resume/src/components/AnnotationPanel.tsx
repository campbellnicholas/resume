import { memo, ReactNode } from 'react';
import MarkdownContent from './MarkdownContent';

interface AnnotationPanelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: ReactNode | string;
}

/**
 * AnnotationPanel - Displays additional information in a slide-out panel
 * @param {boolean} isOpen - Controls panel visibility
 * @param {function} onClose - Handler for closing the panel
 * @param {string} title - Title of the annotation
 * @param {ReactNode | string} content - Content to display in the panel
 */
const AnnotationPanel = memo(({ isOpen, onClose, title, content }: AnnotationPanelProps) => {
  const renderContent = () => {
    if (typeof content === 'string') {
      return <MarkdownContent content={content} />;
    }
    return content;
  };

  return (
    <div 
      className={`fixed top-0 right-0 h-full w-96 bg-theme-bg border-l border-theme-border transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="annotation-title"
    >
      <div className="p-6 h-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 id="annotation-title" className="font-semibold text-theme-text">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-theme-text hover:text-theme-hover p-2"
            aria-label="Close annotation"
          >
            ×
          </button>
        </div>
        <div className="flex-1 overflow-y-auto text-theme-text">
          {renderContent()}
        </div>
      </div>
    </div>
  );
});

AnnotationPanel.displayName = 'AnnotationPanel';

export default AnnotationPanel; 