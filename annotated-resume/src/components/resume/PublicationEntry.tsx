import { memo } from 'react';
import { Publication } from '../../types/resume';
import { ErrorBoundary } from '../common/ErrorBoundary';
import { AnnotatedText } from '../common/AnnotatedText';

interface PublicationEntryProps {
  readonly publication: Publication;
}

/**
 * PublicationEntry - Displays a single publication entry
 * @param {Publication} publication - The publication data to display
 */
const PublicationEntryComponent = memo(({ publication }: PublicationEntryProps) => {
  return (
    <li 
      className="publication-entry"
      role="listitem"
    >
      <AnnotatedText
        text={publication.description}
        annotations={publication.annotations?.map(annotation => ({
          ...annotation,
          linkedText: annotation.linkedText || publication.title
        }))}
      />
      {publication.link && (
        <a 
          href={publication.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-theme-hover hover:underline ml-2"
          aria-label={`Read publication: ${publication.title}`}
        >
          (Link)
        </a>
      )}
    </li>
  );
});

PublicationEntryComponent.displayName = 'PublicationEntry';

/**
 * Wrapped version of PublicationEntry with error boundary
 */
export const PublicationEntry = (props: PublicationEntryProps): React.ReactElement => (
  <ErrorBoundary>
    <PublicationEntryComponent {...props} />
  </ErrorBoundary>
); 