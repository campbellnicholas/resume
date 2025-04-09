import { memo } from 'react';
import { Publication } from '../types/resume';

interface PublicationEntryProps {
  publication: Publication;
}

/**
 * PublicationEntry - Displays a single publication entry
 * @param {Publication} publication - The publication data to display
 */
const PublicationEntry = memo(({ publication }: PublicationEntryProps) => {
  return (
    <li className="publication-entry">
      {publication.link ? (
        <a 
          href={publication.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read ${publication.title}`}
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

PublicationEntry.displayName = 'PublicationEntry';

export default PublicationEntry; 