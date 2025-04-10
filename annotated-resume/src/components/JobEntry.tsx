import { memo } from 'react';
import { Job } from '../types/resume';
import AnnotatedText from './AnnotatedText';

interface JobEntryProps {
  job: Job;
}

/**
 * JobEntry - Displays a job entry with its positions and responsibilities
 * @param {Object} job - The job data to display
 * @param {string} job.id - Unique identifier for the job
 * @param {string} job.company - Company name
 * @param {string} job.location - Job location
 * @param {boolean} job.remote - Whether the job was remote
 * @param {Array} job.positions - List of positions held at the company
 */
const JobEntry = memo(({ job }: JobEntryProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-2">
        {job.company} - {job.location} {job.remote && '(Remote)'}
      </h3>
      {job.positions.map((position, index) => (
        <div key={index} className="mb-4">
          <h4 className="text-lg font-medium mb-2">
            {position.title}
            {position.team && ` - ${position.team}`}
          </h4>
          <p className="text-sm text-theme-text mb-2">
            {position.startDate} - {position.endDate}
          </p>
          <ul className="list-disc list-inside space-y-2">
            {position.responsibilities.map((responsibility, idx) => (
              <li key={idx}>
                <AnnotatedText
                  id={responsibility.annotation?.id || `responsibility-${job.id}-${index}-${idx}`}
                  text={responsibility.text}
                  annotation={responsibility.annotation}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
});

JobEntry.displayName = 'JobEntry';

export default JobEntry; 