import { ResumeData } from '../types/resume';
import { DegreeType, PublicationType, TechnologyCategory, CompetencyCategory } from '../types/enums';
import { createID } from '../types/resume';

export const resumeData: ResumeData = {
  name: 'Nick Campbell',
  contact: {
    city: 'Los Angeles, CA',
    linkedIn: {
      url: 'https://www.linkedin.com/in/campbell-nick/',
      displayText: 'LinkedIn'
    }
  },
  summary: {
    text: 'Engineering manager with extensive experience leading cross-platform development teams in fast-paced e-commerce environments. Proven ability to drive process improvements, foster relationships, and demonstrate empathetic leadership while delivering high-quality software. Skilled in software engineering and dedicated to building inclusive, high-performing teams.',
    annotations: [
      {
        id: createID('empathetic-leadership'),
        title: '"empathetic leadership"',
        content: `
# What even is empathetic leadership?

I won't say that "empathatic leadership" is overused or misused but it can be vague. It can also find itself on resumes for people who are simply nice but don't necessarily use it as part of their leadership style.

The "empathetic" part is hopefully easy. Recognizing how the people around you feel and understanding what that feeling means is important to being a human. Otherwise, we'd all be raging sociopaths that see our coworkers at numbers or minions or proverbial cogs in the machine. Understanding you're around a bunch of people that also have agency just like you is important to the human condition and makes the people that work around you also feel unapologetically human.

The leadership part is what you do with that empathy. I am a nice person, for sure. I've been told I am such by many reputable sources. But "empathetic leadership" is being kind while also being clear. It's about understanding what people are going through and knowing how others are capable of contributing and where others want to be in their careers/lives. That requires a lot of listening, a lot of processing, and a lot of honesty. But, you know, without being an absolute jerk about it.

Empathetic leadership is a way of creating teams and environments that are inclusive, supportive, and productive. It makes people feel like human beings so they can be their best. You get rid of the cruft of micromanagement and toxicity and all the things you have to do to maintain that. You have happier people on the team. And you get a lot of cool stuff done. You have to work to make money. Make work feel less painful for it.
`,
        linkedText: 'empathetic leadership'
      },
      {
        id: createID('professional-profile-ugh'),
        title: '"Engineering manager"',
        content: `# Ugh, this is so dry.

Most people of the resume experts (professional and self-proclaimed) I talk to say  I need to have this stodgy persona in a resume because ATS/AI/headless resume scanners don't have the nuance to pull the capable employee from more dynamic sentence structure and the desire to make reading entertaining. That makes sense. This professional summary, though, while packed with phrases that describe what I am good at, is just so deeply bland.

What is it that I do? I like to lead teams of puzzle-solving engineers to have a humane way of life while also producing high-quality software. That's really it. Also people like to partner with me because (1) I'm not a jerk and (2) I like to solve their problems, too. 

Also I'm funny. Well, more funny than AI at least. So far.`,
        linkedText: 'Engineering manager'
      }
    ]
  },
  experience: [
    {
      id: createID('grubhub'),
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
              text: 'Managed a cross-functional engineering team (Android, iOS, Web) of 10-12 engineers in the resiliency and enhancement of the order tracking feature for Grubhub and seamless consumer-facing applications written in Kotlin, Swift, and React/TypeScript.',
              annotations: [{
                id: createID('grubub-engineer-number'),
                title: '10-12 engineers',
                content: `## Are you not sure about the number of engineers on your team? Were some of them ghosts?

Were some of them ghosts? No. At least I don't think so. BUT NOW I'M NOT SURE.

This is more about the fluctuation of the team members as we assumed and shed responsibilities during various restructures. Over the course of three and a half years, we usually had somewhere between 10 and 12 engineers. You might call that 11 on average. At least 10, rarely more than 12. I managed a large team.`,
                linkedText: '10-12 engineers'
              }]
            },
            {
              text: 'Drove the successful launch of MVPs on many projects including item substitution workflows (reduced order cancellations by 5% and contacts to customer service by 10%) and adding PIN verification (saved $6M annually).',
              annotations: [{
                id: createID('grubhub-pin-verification'),
                title: 'PIN verification',
                content: `## PIN Verification: What is it?
You've seen this before not only in this app but other apps where handshakes (metaphorical or literal) help to thwart ne'er-do-wells and to avoid well-meaning mistakes. The problem was that food-eaters wanted to eat their food but couldn't find it even though it'd been marked as delivered. So we added a process for verifying that the food-eater and the deliverer were both at the right place.

![Food Bandit Thwarted!](./assets/images/grubhub-pin-verification.webp)

### What was your part?
Thanks so much for asking. Our team was responsible for showing the food-eater the PIN in the post purchase/order tracking screen. We decoupled it from the rest of the PIN generation process. This made it a lot easier to roll out indpendently and allowed to finish very quickly. We also added it to notifications, which we were also responsible for, and into order details to make sure it was in as many places as possible.

### Did people still miss it?
All the time. Just, like, all the time. Most found it but a lot of people still couldn't find it. We were in the middle of building the next iteration to make it easier to find in the noise and to improve the notification experience when I left the company.

### But did it work?
Yeah! We dropped the number of contacts to customer service for missed deliveries which was the goal and that saved $6MM annually. If you're interested in more, feel free to drop me a line.`,
                linkedText: 'PIN verification'
              }]
            },
            {
              text: 'Pushed iterative development for existing features around enhanced order transparency for consumers (example: added transparency for bundled orders, which reduced delivery estimate contacts by 20%, saving $1M annually) and merchants (example: automated workflow to dispute attribution charges).'
            },
            {
              text: 'Implemented a standardized design document process, fostering clearer communication and collaboration, and optimized the release process, saving on delivery timeline overages by 25%.',
              annotations: [{
                id: createID('grubhub-timeline-overages'),
                title: '"timeline overages by 25%"',
                content: `## What does 'timeline overages by 25%' even mean?

In the aftermath of a long, onorous project, we came together as a team to figure out why is was both long and onorous. We learned that the project exacerbated existing issues: engineers estimating based on optimistic assumptions and things took longer than they thought; other engineers and teams weren't always on the same page if we needed things from them; and requirements that seemed clear weren't. We'd been able to limp through smaller work based on our team's great collaborative and communicative environment but the large project really blew those problems up. As large projects are wont to do.

So I revamped the software development process for our team which required more upfront organization and investigation. This including splitting the project and engineering kickoffs, requiring design documents like RFCs for projects and getting reviews from all engineers involved. By the end of the engineering kickoff, product, design, and engineering across the org would be on the same page. This saved us a lot of pivoting and juking throughout a feature and allowed us to both ask good questions and deliver, if not faster, at least more consistently on time. 

It worked so well, we spread it to other teams in our organization and I wrote documentation for our implementation so that others could contribute. We also had kaizens to continue to improve the process which engineers and partners were very involved in.
`,
                linkedText: 'timeline overages by 25%'
              }]
            },
            { text: 'Collaborated with product, design, business insights, and other engineering teams to define roadmaps, coordinate capacity planning, distill engineering needs, and prioritize projects along axes of business growth and engineering excellence.' },
            { text: 'Supervised a backend microservices engineering team (Java and Kotlin), delivering critical data APIs for customer support agent tools and order tracking frontend features.' },
            { text: 'Mentored engineers at varied levels (SE1, SE2, Senior, and Staff) on goal-setting against both company directives and individual growth at the company and beyond, leading to promotion tracks.',
              annotations: [{
                id: createID('grubhub-mentoring-levels'),
                title: '"SE1, SE2, Senior, and Staff"',
                content: `## Senior and Staff I know. But SE1 and SE2?

Software Engineer 1 and Software Engineer 2. These don't necessarily map exactly in every company. SE1 is usually just above an associate engineer who is brand new (out of college or a career change). SE1 is your quintessential junior engineer. SE2 is that mid-level engineer transitioning into the independence of a Senior engineer. 

Some helpful approximate mapping from <a href="https://www.levels.fyi/?compare=Grubhub,Google,DoorDash,Airbnb,Microsoft&track=Software%20Engineer" target="_blank" rel="noopener">levels.fyi</a>:

|Company|SE1|SE2|Senior|Staff|
|---|---|---|---|---|
|Google|L3/SWEII|L4/SWEIII|L4/SWEIII|L5/Senior|
|DoorDash|E3|E4|E4|E5|
|Airbnb|G7/Engineer|G8/Engineer|G9/Senior|G9/Senior|
|Microsoft|SDE 59/60|SDE2 61/62|Senior 63|Senior 64|
|Apple|ICT2/Jr|ICT3/SE|ICT4/Senior|ICT4/Senior|
|Netflix|L3/Engineer|L4/Engineer II|L5/Senior|L5/Senior|

PS: I sometimes have this written in other versions of my resume as "Staff, Senior, and more junior engineers." It's not my favorite way to describe the hierarchy since it muddles distinct positions so I'm opting for just being more explicit if a little wordy.
`,
                linkedText: 'SE1, SE2, Senior, and Staff'
              },
              {
                id: createID('grubhub-growth-beyond'),
                title: '"growth at the company and beyond"',
                content: `## Do you want to talk about the "beyond" part?
I do. Promotion paths are a tangible shorthand for growth. Getting to the next level at company is empirical evidence that you have grown. And it's good. I want engineers to get promoted. There are no losers in that sceenario. But sometimes promotion tracks can be narrowly focused on a company's principles and needs which may or may not translate to the larger industry. 

I like to focus growing engineers for their careers. This isn't IBM in the '50s. Engineers are not going to be lifers with a penision. Transition is inevitable (and also a good thing) so I like to focus on creating good engineering habits for their work/life balance and their continuing education. It's a more holistic approach that keeps the trends of the modern industry in mind.
`,
                linkedText: 'growth at the company and beyond'
              }
          ]},
            { text: 'Engaged in hiring activities, including conducting phone screens, participating in panel interviews (system architecture, coding fundamentals, and behavioral), and contributing to hiring process improvements.' },
            { text: 'Acted as scrum master and Jira admin for the team in an Agile environment' },
          ]
        }
      ]
    },
    {
      id: createID('beautycounter'),
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
              text: 'Owned shopping funnel and post purchase experience for beautycounter.com and the iOS app and launched dozens of initiatives including sampling, password security, dynamic widgets, and a blog re-platform.',
              annotations: [{
                id: createID('beautycounter-features'),
                title: '"dozens of initiatives"',
                content: `## So dozens means more than just these four?
Yeah, many more. As noted elsewhere, the frontends team was in charge of every consumer-facing interface except for the checkout flow (and even then this team worked on elements in checkout, too). So everything like Beautycounter Live (live video streams from the Abbot Kinney store in Venice, CA), user-generated content organization, language options and translations, quick add to cart from category pages, and many others that wouldn't fit into 40 words or fewer. I chose these four because they cover some of the basics that the team was in charge of.

![Sampling and Dynamic Widgets!](./assets/images/beautycounter-project-examples.webp)

__Sampling:__ By purchasing products (or, in some cases, just by being a special type of customer), you could add samples of other products to your cart. So buy some sunscreen, get a free dose of face lotion. The types of samples needed to be updated by stakeholders easily and needed to be added to orders only in certain conditions and sometimes could also be purchased by certain kinds of customers. A lot of business logic went into building this feature and needed to work with non-engineer partners to make sure the rules were right and the right samples were available for a given month.

__Dynamic Widgets:__ The inevitable position you are put in when using a service like Contentful is that you will run out of Content Types, or the units of forms from which you can build instances of your content. You have seveny billion records but the money comes in from how many content types are available to you: you have to jump tiers in order to get more. So we created a content type that allows a reference block to add in generic widgets based on other Content Types. Drag and drop your widgets and form elements to create a page.

__Password Security:__ Because of the nature of Beautycounter's business and the lobby of people that sold Beautycounter products in the field, passwords were something of a problem (some sales associates would compromise a client's password security to do full concierge shopping on thier behalf). It was a problem. So we found a way to ensure that passwords were more secure, created a process to reset passwords so they fit criteria that made them difficult to guess, and updated the flow for recovering passwords. This was in conjunction to a Concierge flow that allowed sales associates to create orders for clients without actually logging in as the someone else.

__Blog Re-Platform:__ The blog has been rotting on the site for forever and it was high time to do something about it. Trouble was that, it'd been decaying for so long, no one remembered how to actually update it, logins were mysteries, and the engineers we had were not versed in updating PHP. So we converted the WordPress site to a headless CMS and imported the content into a website so that we could update both the templates and content ourselves without having to divine the mysteries of Beautycounter employees of yore. We got to keep the old content (and refresh it) while also giving it the fresh, clean look the website had to offer.
`,
                linkedText: 'dozens of initiatives'
              }]
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
      id: createID('cuyana'),
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
      id: createID('sagepath'),
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
      id: createID('gsu'),
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
      annotations: [{
        id: createID('engineering-leadership'),
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
      }]
    },
    {
      name: 'Coaching & Mentorship',
      category: CompetencyCategory.LEADERSHIP,
      annotations: [{
        id: createID('coaching'),
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
        linkedText: 'Coaching & Mentorship'
      }]
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
      description: 'Reviews for TV.com and TVGuide.com (2012 - 2017, over 40 episode recaps and features)',
      annotations: [{
        id: createID('tv-reviews'),
        title: '"TV.com and TVGuide.com"',
        content: `
## What are these reviews for TV.com and TVGuide.com?

These were reviews and recaps of television episodes. My beat consisted of _Pretty Little Liars_, _Supergirl_, _Scandal_, and occasionally filling in on _The Flash_ and _Arrow_. I started at TV.com until they were bought by CBS Interactive (and eventually pushed onto that great internet ice floe) and then I was folded into TVGuide.com. 

The reviews and recaps were in the vein of Television Without Pity but with less cruelty and meant to have more fun with the fans. Fans, I learned, are not to be trifled with. Am I a more evolved person almost a decade later? Hopefully. But also some are still funny in a _not_ cringy way so I leave them here as a button on a mostly bland document of my career. I can do all these engineering leadership things but also I have thoughts on how the Ezria ship from _PLL_ is morally objectionable.
`,
        linkedText: 'TV.com and TVGuide.com'
      }]
    }
  ]
}; 