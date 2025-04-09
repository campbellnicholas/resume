import { memo } from 'react';
import { School } from '../types/resume';

interface SchoolEntryProps {
  school: School;
}

/**
 * SchoolEntry - Displays a single education entry
 * @param {School} school - The school data to display
 */
const SchoolEntry = memo(({ school }: SchoolEntryProps) => {
  return (
    <div id={school.id} className="school-entry">
      <p>
        <b>{school.degree}</b>, {school.fieldOfStudy}, {school.school}, {school.location}
      </p>
    </div>
  );
});

SchoolEntry.displayName = 'SchoolEntry';

export default SchoolEntry; 