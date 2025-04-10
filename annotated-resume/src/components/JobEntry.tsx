import { memo } from 'react';
import { Job } from '../types/resume';

interface JobEntryProps {
  job: Job;
}

/**
 * JobEntry - Displays a single job entry with its positions and responsibilities
 * @param {Job} job - The job data to display
 */
const JobEntry = memo(({ job }: JobEntryProps) => {
  return (
    <div id={job.id} className="job-entry">
      <h3>{job.company}</h3>
      <p className="location">
        {job.location}
        {job.isRemote && <span className="remote">Remote</span>}
      </p>
      {job.positions.map((position, index) => (
        <div key={index} className="job text-left">
          <ul className="flex w-full">
            <li className="position flex-auto">
              {position.title}
              {position.team && <span className="team">{position.team}</span>}
            </li>
            <li className="era flex-auto text-right">
              {position.startDate} - {position.endDate}
            </li>
          </ul>
          <ul className="responsibilities ml-8">
            {position.responsibilities.map((responsibility, idx) => (
              <li key={idx} className="list-disc">{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
});

JobEntry.displayName = 'JobEntry';

export default JobEntry; 