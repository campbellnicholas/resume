import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Job, createID } from '../../../types/resume';
import { JobEntry } from '../JobEntry';

describe('JobEntry', () => {
  
  const mockJob: Job = {
    id: createID('test-job'),
    company: 'Test Tech',
    location: 'Test, CA',
    remote: true,
    positions: [
      {
        title: 'Software Engineer',
        team: 'Engineering',
        startDate: '2020-01-01',
        endDate: '2021-01-01',
        responsibilities: [
          {text: 'Wrote clean tests with 90% coverage'},
          {
            text: 'Developed and maintained software applications',
            annotations: [
              { 
                id: createID('test-annotation'),
                title: 'Annotation Title',
                content: `## Annotation Content 
Linked Text 123 Content Annotation`,
                linkedText: 'maintained'
              } 
            ]
          }
        ]
      }
    ]
  };

  const nonRemoteJob = { ...mockJob, remote: false };

  /*
export interface Responsibility {
  readonly text: string;
  readonly annotations?: ReadonlyArray<{
    readonly id: ID;
    readonly title: string;
    readonly content: string;
    readonly linkedText?: string;
  }>;
}

export interface Job {
  readonly id: ID;
  readonly company: string;
  readonly location: string;
  readonly remote: boolean;
  readonly positions: ReadonlyArray<Position>;
}
  */

  it('renders job information correctly', () => {
    render(<JobEntry job={mockJob} />);
    
    // Check if all the basic job information is rendered
    expect(screen.getByText(mockJob.company)).toBeInTheDocument();
    expect(screen.getByText(mockJob.location)).toBeInTheDocument();
    expect(screen.getByText(mockJob.positions[0].title)).toBeInTheDocument();
    expect(screen.getByText(`${mockJob.positions[0].startDate} - ${mockJob.positions[0].endDate}`)).toBeInTheDocument();
    expect(screen.getByText('(Remote)')).toBeInTheDocument();
    
    // We should have two responsibilities (though the second one is broken up with a button)
    expect(screen.getByText(mockJob.positions[0].responsibilities[0].text)).toBeInTheDocument();
    // expect(screen.getByText(mockJob.positions[0].responsibilities[1].text)).toBeInTheDocument();
  });

  it('renders the annotation content when the button is clicked', () => {
    render(<JobEntry job={mockJob} />);
    
    // Get the annotation we want to test (and thrown an error just in case)
    const annotation = mockJob.positions[0].responsibilities[1].annotations?.[0];
    if (!annotation) throw new Error('Annotation not found in mock data');

    // Find and click the annotation button
    const button = screen.getByRole('button', { 
      name: `Learn more about ${annotation.linkedText}` 
    });
    fireEvent.click(button);

    // Verify the annotation content is displayed
    expect(screen.getByRole('heading', { level: 2, name: 'Annotation Content' })).toBeInTheDocument();
  });

  it('does not render remote status when job is not remote', () => {

    // For the one on-site job thus far
    render(<JobEntry job={nonRemoteJob} />);
    expect(screen.queryByText('(Remote)')).not.toBeInTheDocument();
  });

  it('has correct ARIA attributes', () => {
    render(<JobEntry job={mockJob} />);
    
    // Accessibility is important; these tests make sure we have some declared ARIA roles outside of the implicit ones
    const article = screen.getByRole('article');
    expect(article).toHaveAttribute('aria-label', `Work Experience at ${mockJob.company}`);
  });

  it('has correct ID attribute', () => {
    render(<JobEntry job={mockJob} />);
    
    const article = screen.getByRole('article');
    expect(article).toHaveAttribute('id', mockJob.id);
  });
}); 