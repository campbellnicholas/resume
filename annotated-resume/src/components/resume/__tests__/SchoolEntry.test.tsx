import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SchoolEntry } from '../SchoolEntry';
import { School, createID } from '../../../types/resume';
import { DegreeType } from '../../../types/enums';

describe('SchoolEntry', () => {
  const mockSchool: School = {
    id: createID('test-school'),
    school: 'Test University',
    degree: DegreeType.BACHELOR_OF_ARTS,
    fieldOfStudy: 'Computer Science',
    location: 'Test City, TS',
  };

  it('renders school information correctly', () => {
    render(<SchoolEntry school={mockSchool} />);
    
    // Check if all school information is rendered
    expect(screen.getByText(mockSchool.degree)).toBeInTheDocument();
    expect(screen.getByText(mockSchool.fieldOfStudy)).toBeInTheDocument();
    expect(screen.getByText(mockSchool.school)).toBeInTheDocument();
    expect(screen.getByText(mockSchool.location)).toBeInTheDocument();
  });

  it('has correct ARIA attributes', () => {
    render(<SchoolEntry school={mockSchool} />);
    
    const article = screen.getByRole('article');
    expect(article).toHaveAttribute('aria-label', `Education at ${mockSchool.school}`);
  });

  it('has correct ID attribute', () => {
    render(<SchoolEntry school={mockSchool} />);
    
    const article = screen.getByRole('article');
    expect(article).toHaveAttribute('id', mockSchool.id);
  });
}); 