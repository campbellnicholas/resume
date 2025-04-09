import { ResumeData } from '../types/resume';
import { DegreeType, JobType, TechnologyCategory, CompetencyCategory, PublicationType } from '../types/enums';

export const resumeData: ResumeData = {
  name: 'Nick Campbell',
  contact: {
    city: 'Greater Los Angeles Area',
    linkedIn: {
      url: 'https://linkedin.com/in/campbell-nick',
      displayText: 'LinkedIn Profile'
    }
  },
  summary: 'Engineering Manager with extensive experience leading cross-platform development teams in fast-paced e-commerce environments. Proven ability to drive process improvements, foster relationships, and demonstrate empathetic leadership while delivering high-quality software. Skilled in software engineering and dedicated to building inclusive, high-performing teams.',
  experience: [
    {
      id: 'grubhub',
      company: 'Grubhub',
      location: 'Chicago, IL',
      isRemote: true,
      type: JobType.FULL_TIME,
      positions: [
        {
          title: 'Engineering Manager || Manager, Engineering',
          team: 'Post Purchase Team',
          startDate: '09/2021',
          endDate: '03/2025',
          responsibilities: [
            'Managed a cross-functional engineering team (Android, iOS, Web) of 10-12 engineers in the resiliency and enhancement of the order tracking feature for Grubhub and seamless consumer-facing applications written in Kotlin, Swift, and React/TypeScript.',
            'Drove the successful launch of MVPs on many projects including item substitution workflows (reduced order cancellations by 5% and contacts to customer service by 10%) and adding PIN verification (saved $6M annually).',
            'Pushed iterative development for existing features around enhanced order transparency for consumers (example: added transparency for bundled orders, which reduced delivery estimate contacts by 20%, saving $1M annually) and merchants (example: automated workflow to dispute attribution charges).',
            'Implemented a standardized design document process, fostering clearer communication and collaboration, and optimized the release process, saving on delivery timeline overages by 25%.',
            'Collaborated with product, design, business insights, and other engineering teams to build road maps, coordinate capacity planning, prioritize projects, and construct a highly visible and accessible backlog.',
            'Supervised a backend Java engineering team, delivering critical data APIs for customer support agent tools and order tracking frontend features.',
            'Coached and mentored engineers at varied levels (staff, senior, and more junior) on goal-setting against both company directives and individual growth at the company and beyond, leading to promotion tracks.',
            'Engaged in hiring activities, including conducting phone screens, participating in panel interviews (system architecture, coding fundamentals, and behavioral), and contributing to hiring process improvements.',
            'Acted as scrum master and Jira admin for the team in an Agile environment'
          ]
        }
      ]
    },
    {
      id: 'beautycounter',
      company: 'Beautycounter',
      location: 'Santa Monica, CA',
      positions: [
        {
          title: 'Engineering Manager || Manager, Engineering',
          team: 'E-Commerce Frontends Team',
          startDate: '04/2018',
          endDate: '09/2021',
          responsibilities: [
            'Led eight software engineers across two teams in feature development and maintenance of an e-commerce platform: a web team building in React, NodeJS, and GraphQL; and an iOS team building in Swift.',
            'Owned shopping funnel and post purchase experience for beautycounter.com and the iOS app and launched dozens of initiatives including sampling, password security, dynamic widgets, and a blog re-platform.',
            'Co-architected the career framework for the technology department.',
            'Created a positive team culture based on psychological safety, peer education, continual improvement, and career advancement and trajectory through coaching and mentoring focused on empathy.',
            'Maintained client-side data integrity (Segment, Google Tag Manager, Google Analytics, Mixpanel), post-production monitoring (Ghost Inspector, New Relic Synthetics), and consumer-facing CMS (Contentful).'
          ]
        },
        {
          title: 'Frontend Developer || Senior Software Engineer',
          startDate: '10/2017',
          endDate: '04/2018',
          responsibilities: [
            'Created a new interface for checkout flow within the first two months.',
            'Created new features, fixed production issues, and maintained the codebase.',
            'Set coding paradigms for the platform via code reviews and documentation.',
            'Owned feature flag and A/B testing framework (Optimizely Full Stack).',
            'Promoted to team lead within the first six months.'
          ]
        }
      ]
    },
    {
      id: 'cuyana',
      company: 'Cuyana',
      location: 'San Francisco, CA',
      isRemote: true,
      positions: [
        {
          title: 'Frontend Developer',
          startDate: '01/2017',
          endDate: '09/2017',
          responsibilities: [
            'Assisted in front end initiatives for customer-facing platforms, including the responsive website and HTML emails.',
            'Updated Magento 1.9 templates and created new modules using Sass and vanilla JavaScript for new initiatives.',
            'Assisted in marketing initiatives (creating landing pages and emails).',
            'Provided assistance in creating guidelines for processes and workflows.',
            'Created code for use in Optimizely A/B tests.'
          ]
        }
      ]
    },
    {
      id: 'sagepath',
      company: 'Sagepath',
      location: 'Atlanta, GA',
      isRemote: true,
      positions: [
        {
          title: 'Front End Web Developer',
          startDate: '09/2009',
          endDate: '12/2016',
          responsibilities: [
            'Worked with brands such as Coca-Cola, NAPA, TOMS, and Conservation Services Group (CSG).',
            'Managed scheduled updates, redesigns, and full-cycle development.',
            'Developed solutions using jQuery MooTools, and Prototype.',
            'Developed performance-enhancing strategies for Magento environments.',
            'As front end SME, participated in design reviews, architectural assessments, code reviews, and level-of-effort estimations in an Agile environment.'
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
      description: 'Leading and mentoring engineering teams'
    },
    {
      name: 'Coaching',
      category: CompetencyCategory.LEADERSHIP
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
      proficiency: 'Expert'
    },
    {
      name: 'React, Contentful, GitHub Actions, Jenkins',
      category: TechnologyCategory.FRAMEWORKS,
      proficiency: 'Expert'
    },
    {
      name: 'AWS, GCP',
      category: TechnologyCategory.CLOUD,
      proficiency: 'Advanced'
    },
    {
      name: 'Figma, Adobe Creative Suite',
      category: TechnologyCategory.TOOLS,
      proficiency: 'Intermediate'
    },
    {
      name: 'Cursor, Gemini, Claude, Firefly',
      category: TechnologyCategory.AI,
      proficiency: 'Advanced'
    }
  ],
  publications: [
    {
      title: 'Reviews',
      type: PublicationType.ESSAY,
      link: 'https://www.tvguide.com/authors/nicholascampb/',
      description: 'for TV.com and TVGuide.com (2012 - 2017, over 40 episode recaps and features)'
    }
  ]
}; 