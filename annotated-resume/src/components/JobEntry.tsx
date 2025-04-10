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
      <div className="company mb-2">
        <h3 className="font-semibold">
          {job.company}
        </h3>
        <p>{job.location} {job.remote && <span className="isRemote">Remote</span>}</p>
      </div>
      
      {job.positions.map((position, index) => (
        <div key={index} className="mb-4">
          <div className="positionEra flex">
            <div className="position flex-1">
              <h4 className="italic">{position.title} </h4>
              {position.team && <span className="positionTeam text-sm italic">{position.team}</span>}
            </div>
            <p className="era flex-1 text-right">
              {position.startDate} - {position.endDate}
            </p>
          </div>
          <ul className="list-disc list-inside space-y-2">
            {position.responsibilities.map((responsibility, idx) => (
              <li key={idx}>
                <AnnotatedText
                  text={responsibility.text}
                  annotations={responsibility.annotation ? [responsibility.annotation] : undefined}
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