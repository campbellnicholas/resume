import { Annotation } from '../types/resume';

export const annotations: Annotation[] = [
  {
    id: 'summary',
    title: 'Professional Summary',
    content: `This section provides a high-level overview of my professional experience and key skills. It's designed to give recruiters and hiring managers a quick understanding of my background and what I bring to the table.

Key points:
- 10+ years of experience in software development
- Specialized in frontend development and user experience
- Strong background in React, TypeScript, and modern web technologies
- Proven track record of leading teams and delivering successful projects`
  },
  {
    id: 'grubhub',
    title: 'Grubhub Experience',
    content: `My time at Grubhub was focused on improving the customer experience and implementing new features. Key achievements:

- Led the redesign of the checkout flow, resulting in a 15% increase in conversion
- Implemented A/B testing framework to optimize user flows
- Mentored junior developers and established best practices
- Collaborated with product and design teams to deliver high-quality features`
  },
  {
    id: 'beautycounter',
    title: 'Beautycounter Experience',
    content: `At Beautycounter, I worked on modernizing their e-commerce platform and improving the consultant experience. Highlights:

- Implemented a new design system using React and TypeScript
- Optimized performance, reducing page load times by 40%
- Built real-time inventory management system
- Developed training materials for the engineering team`
  }
]; 