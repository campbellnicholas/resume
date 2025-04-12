import { memo } from 'react';
import { Publication } from '../types/resume';
import { ErrorBoundary } from './ErrorBoundary';

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
      {publication.link ? (
        <a 
          href={publication.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read publication: ${publication.title}`}
        >
          {publication.title}
        </a>
      ) : (
        <span>{publication.title}</span>
      )}
      <span className="publication-description"> {publication.description}</span>
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