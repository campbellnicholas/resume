import { memo } from 'react';
import { School } from '../../types/resume';
import { ErrorBoundary } from '../common/ErrorBoundary';

interface SchoolEntryProps {
  readonly school: School;
}

/**
 * Displays a single education entry
 * @param school - The school data to display
 * @returns A div containing the school information
 */
const SchoolEntryComponent = memo(({ school }: SchoolEntryProps): React.ReactElement => {
  return (
    <div 
      id={school.id} 
      className="school-entry"
      role="article"
      aria-label={`Education at ${school.school}`}
    >
      <p>
        <b>{school.degree}</b>, {school.fieldOfStudy}, {school.school}, {school.location}
      </p>
    </div>
  );
});

SchoolEntryComponent.displayName = 'SchoolEntry';

/**
 * Wrapped version of SchoolEntry with error boundary
 */
export const SchoolEntry = (props: SchoolEntryProps): React.ReactElement => (
  <ErrorBoundary>
    <SchoolEntryComponent {...props} />
  </ErrorBoundary>
); 