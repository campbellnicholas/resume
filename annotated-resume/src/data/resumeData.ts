import { ResumeData } from '../types/resume';
import { DegreeType, PublicationType, TechnologyCategory, CompetencyCategory } from '../types/enums';

export const resumeData: ResumeData = {
  name: 'Nick Campbell',
  contact: {
    city: 'Los Angeles, CA, USA',
    linkedIn: {
      url: 'https://linkedin.com/in/campbell-nick',
      displayText: 'LinkedIn Profile'
    }
  },
  summary: {
    text: 'Engineering Manager with extensive experience leading cross-platform development teams in fast-paced e-commerce environments. Proven ability to drive process improvements, foster relationships, and demonstrate empathetic leadership while delivering high-quality software. Skilled in software engineering and dedicated to building inclusive, high-performing teams.',
    annotation: {
      id: 'summary-leadership',
      title: 'Leadership Philosophy',
      content: `
# Leadership Philosophy

## Core Principles
- Empathetic leadership
- Continuous improvement
- Inclusive team building
- High-quality delivery

## Key Strengths
- Cross-platform team management
- Process optimization
- Relationship building
- Technical excellence

## Impact
- Successfully led teams in fast-paced e-commerce environments
- Drove significant process improvements
- Built and maintained high-performing, inclusive teams
- Delivered high-quality software solutions
`,
      linkedText: 'empathetic leadership'
    }
  },
  experience: [
    {
      id: 'grubhub',
      company: 'Grubhub',
      location: 'Chicago, IL',
      remote: true,
      positions: [
        {
          title: 'Engineering Manager || Manager, Engineering',
          team: 'Post Purchase Team',
          startDate: '09/2021',
          endDate: '03/2025',
          responsibilities: [
            {
              text: 'Managed a cross-functional engineering team (Android, iOS, Web) of 10-12 engineers in the resiliency and enhancement of the order tracking feature for Grubhub and seamless consumer-facing applications written in Kotlin, Swift, and React/TypeScript.'
            },
            {
              text: 'Drove the successful launch of MVPs on many projects including item substitution workflows (reduced order cancellations by 5% and contacts to customer service by 10%) and adding PIN verification (saved $6M annually).',
              annotation: {
                id: 'grubhub-pin-verification',
                title: 'PIN Verification Project',
                content: `
# PIN Verification Implementation
Led the implementation of a PIN verification system for high-risk orders to reduce fraud and improve delivery security.

## Key Features
- Real-time PIN generation and validation
- Secure PIN delivery via SMS
- Fallback mechanisms for failed deliveries
- Analytics dashboard for fraud tracking

## Technical Implementation
- Built using React Native for cross-platform support
- Integrated with Twilio for SMS delivery
- Implemented rate limiting and security measures
- Created automated testing suite

## Impact
- Reduced fraudulent orders by 75%
- Saved $6M annually in fraud prevention
- Improved delivery success rate by 15%
- Enhanced customer trust and satisfaction
`,
                linkedText: 'PIN verification'
              }
            },
            {
              text: 'Pushed iterative development for existing features around enhanced order transparency for consumers (example: added transparency for bundled orders, which reduced delivery estimate contacts by 20%, saving $1M annually) and merchants (example: automated workflow to dispute attribution charges).'
            },
            {
              text: 'Implemented a standardized design document process, fostering clearer communication and collaboration, and optimized the release process, saving on delivery timeline overages by 25%.'
            },
            { text: 'Collaborated with product, design, business insights, and other engineering teams to build road maps, coordinate capacity planning, prioritize projects, and construct a highly visible and accessible backlog.' },
            { text: 'Supervised a backend Java engineering team, delivering critical data APIs for customer support agent tools and order tracking frontend features.' },
            { text: 'Coached and mentored engineers at varied levels (staff, senior, and more junior) on goal-setting against both company directives and individual growth at the company and beyond, leading to promotion tracks.' },
            { text: 'Engaged in hiring activities, including conducting phone screens, participating in panel interviews (system architecture, coding fundamentals, and behavioral), and contributing to hiring process improvements.' },
            { text: 'Acted as scrum master and Jira admin for the team in an Agile environment' },
          ]
        }
      ]
    },
    {
      id: 'beautycounter',
      company: 'Beautycounter',
      location: 'Santa Monica, CA',
      remote: false,
      positions: [
        {
          title: 'Engineering Manager || Manager, Engineering',
          team: 'E-Commerce Frontends Team',
          startDate: '04/2018',
          endDate: '09/2021',
          responsibilities: [
            {
              text: 'Led eight software engineers across two teams in feature development and maintenance of an e-commerce platform: a web team building in React, NodeJS, and GraphQL; and an iOS team building in Swift.'
            },
            {
              text: 'Owned shopping funnel and post purchase experience for beautycounter.com and the iOS app and launched dozens of initiatives including sampling, password security, dynamic widgets, and a blog re-platform.'
            },
            {
              text: 'Co-architected the career framework for the technology department.'
            },
            {
              text: 'Created a positive team culture based on psychological safety, peer education, continual improvement, and career advancement and trajectory through coaching and mentoring focused on empathy.'
            },
            {
              text: 'Maintained client-side data integrity (Segment, Google Tag Manager, Google Analytics, Mixpanel), post-production monitoring (Ghost Inspector, New Relic Synthetics), and consumer-facing CMS (Contentful).'
            }
          ]
        },
        {
          title: 'Frontend Developer || Senior Software Engineer',
          startDate: '10/2017',
          endDate: '04/2018',
          responsibilities: [
            {
              text: 'Created a new interface for checkout flow within the first two months.'
            },
            {
              text: 'Created new features, fixed production issues, and maintained the codebase.'
            },
            {
              text: 'Set coding paradigms for the platform via code reviews and documentation.'
            },
            {
              text: 'Owned feature flag and A/B testing framework (Optimizely Full Stack).'
            },
            {
              text: 'Promoted to team lead within the first six months.'
            }
          ]
        }
      ]
    },
    {
      id: 'cuyana',
      company: 'Cuyana',
      location: 'San Francisco, CA',
      remote: true,
      positions: [
        {
          title: 'Frontend Developer',
          startDate: '01/2017',
          endDate: '09/2017',
          responsibilities: [
            {
              text: 'Assisted in front end initiatives for customer-facing platforms, including the responsive website and HTML emails.'
            },
            {
              text: 'Updated Magento 1.9 templates and created new modules using Sass and vanilla JavaScript for new initiatives.'
            },
            {
              text: 'Assisted in marketing initiatives (creating landing pages and emails).'
            },
            {
              text: 'Provided assistance in creating guidelines for processes and workflows.'
            },
            {
              text: 'Created code for use in Optimizely A/B tests.'
            }
          ]
        }
      ]
    },
    {
      id: 'sagepath',
      company: 'Sagepath',
      location: 'Atlanta, GA',
      remote: true,
      positions: [
        {
          title: 'Front End Web Developer',
          startDate: '09/2009',
          endDate: '12/2016',
          responsibilities: [
            {
              text: 'Worked with brands such as Coca-Cola, NAPA, TOMS, and Conservation Services Group (CSG).'
            },
            {
              text: 'Managed scheduled updates, redesigns, and full-cycle development.'
            },
            {
              text: 'Developed solutions using jQuery MooTools, and Prototype.'
            },
            {
              text: 'Developed performance-enhancing strategies for Magento environments.'
            },
            {
              text: 'As front end SME, participated in design reviews, architectural assessments, code reviews, and level-of-effort estimations in an Agile environment.'
            }
          ]
        }
      ]
    }
  ],
  education: [
    {
      id: 'gsu',
      school: 'Georgia State University',
      degree: DegreeType.BACHELOR_OF_ARTS,
      fieldOfStudy: 'Film and Video',
      location: 'Atlanta, GA',
      graduationYear: 2009
    }
  ],
  competencies: [
    {
      name: 'Engineering leadership',
      category: CompetencyCategory.LEADERSHIP,
      annotation: {
        id: 'engineering-leadership',
        title: 'Engineering Leadership',
        content: `
# Engineering Leadership

## Key Aspects
- Team management and mentorship
- Technical decision-making
- Process optimization
- Cross-functional collaboration

## Impact
- Led teams of 10-12 engineers
- Implemented standardized design processes
- Optimized release workflows
- Fostered team growth and development
`,
        linkedText: 'Engineering leadership'
      }
    },
    {
      name: 'Coaching',
      category: CompetencyCategory.LEADERSHIP,
      annotation: {
        id: 'coaching',
        title: 'Coaching & Mentorship',
        content: `
# Coaching & Mentorship

## Approach
- One-on-one mentorship
- Career path guidance
- Technical skill development
- Leadership training

## Results
- Successfully mentored engineers to promotion
- Developed career frameworks
- Built inclusive team cultures
- Fostered continuous learning
`,
        linkedText: 'Coaching'
      }
    },
    {
      name: 'Mentoring',
      category: CompetencyCategory.LEADERSHIP
    },
    {
      name: 'Collaboration',
      category: CompetencyCategory.COMMUNICATION
    },
    {
      name: 'Building at scale',
      category: CompetencyCategory.TECHNICAL
    },
    {
      name: 'Process improvement',
      category: CompetencyCategory.MANAGEMENT
    },
    {
      name: 'Capacity planning',
      category: CompetencyCategory.MANAGEMENT
    },
    {
      name: 'Code reviews',
      category: CompetencyCategory.TECHNICAL
    },
    {
      name: 'Team building',
      category: CompetencyCategory.LEADERSHIP
    },
    {
      name: 'Growth engineering',
      category: CompetencyCategory.DEVELOPMENT
    },
    {
      name: 'Creative writing',
      category: CompetencyCategory.COMMUNICATION
    },
    {
      name: 'Technical writing',
      category: CompetencyCategory.COMMUNICATION
    },
    {
      name: 'Storytelling',
      category: CompetencyCategory.COMMUNICATION
    },
    {
      name: 'Published writer',
      category: CompetencyCategory.COMMUNICATION
    }
  ],
  technologies: [
    {
      name: 'JavaScript, CSS, TypeScript, Swift, Kotlin, Java',
      category: TechnologyCategory.LANGUAGES,
    },
    {
      name: 'React, Contentful, GitHub Actions, Jenkins',
      category: TechnologyCategory.FRAMEWORKS,
    },
    {
      name: 'AWS, GCP',
      category: TechnologyCategory.CLOUD,
    },
    {
      name: 'Figma, Adobe Creative Suite',
      category: TechnologyCategory.TOOLS,
    },
    {
      name: 'Cursor, Gemini, Claude, Firefly',
      category: TechnologyCategory.AI,
    }
  ],
  publications: [
    {
      title: 'Reviews',
      type: PublicationType.ESSAY,
      link: 'https://www.tvguide.com/authors/nicholascampb/',
      description: 'for TV.com and TVGuide.com (2012 - 2017, over 40 episode recaps and features)',
      annotation: {
        id: 'tv-reviews',
        title: 'TV Reviews & Features',
        content: `
# TV Reviews & Features

## Writing Experience
- Episode recaps and analysis
- Feature articles
- Industry commentary
- Audience engagement

## Publications
- TV.com
- TVGuide.com
- Over 40 published pieces
- 2012-2017 period

## Skills Demonstrated
- Analytical writing
- Critical thinking
- Entertainment industry knowledge
- Audience-focused communication
`,
        linkedText: 'Reviews'
      }
    }
  ]
}; 