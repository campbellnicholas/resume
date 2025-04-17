import { Job } from '../../types/resume';
import { AnnotatedText } from '../common/AnnotatedText';
import { ErrorBoundary } from '../common/ErrorBoundary';

interface JobEntryProps {
  readonly job: Job;
}

/**
 * Component for displaying a job entry
 * @param job - The job data to display
 */
const JobEntry = ({ job }: JobEntryProps): React.ReactElement => {
  return (
    <article className="mb-8" role="article" aria-label={`Work Experience at ${job.company}`} id={job.id}>
      <header className="mb-4">
        <h3 className="font-semibold">{job.company}</h3>
        <p className="text-theme-text/80">
          {job.location}
          {job.remote && <span className="ml-2 isRemote">Remote</span>}
        </p>
      </header>
      <div role="list">
        {job.positions.map((position, idx) => (
          <div key={idx} className="mb-4" role="listitem">
            <h4 className="font-medium">{position.title}</h4>
            {position.team && (
              <p className="text-theme-text/80">{position.team}</p>
            )}
            <p className="text-theme-text/80">
              {position.startDate} - {position.endDate}
            </p>
            <ul className="mt-2 list-disc pl-6">
              {position.responsibilities.map((responsibility, rIdx) => (
                <li key={rIdx}>
                  <AnnotatedText
                    text={responsibility.text}
                    annotations={responsibility.annotations?.map(annotation => ({
                      ...annotation,
                      linkedText: annotation.linkedText || responsibility.text
                    }))}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
};

/**
 * Wrapped version of JobEntry with error boundary
 */
export const JobEntryWrapper = (props: JobEntryProps): React.ReactElement => (
  <ErrorBoundary>
    <JobEntry {...props} />
  </ErrorBoundary>
);

export { JobEntry }; 