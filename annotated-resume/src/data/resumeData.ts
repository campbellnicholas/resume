import { ResumeData } from '../types/resume';
import { DegreeType, PublicationType, TechnologyCategory, CompetencyCategory } from '../types/enums';
import { createID } from '../types/resume';

export const resumeData: ResumeData = {
  name: 'Nick Campbell',
  contact: {
    city: 'Los Angeles, CA, USA',
    linkedIn: {
      url: 'https://www.linkedin.com/in/campbell-nick/',
      displayText: 'LinkedIn'
    },
    github: {
      url: 'https://github.com/campbellnicholas/resume/tree/main/annotated-resume',
      displayText: 'Annotated Resume on Github'
    }
  },
  summary: {
    text: 'Accomplished Engineering Manager experienced in leading cross-platform development teams in fast-paced e-commerce environments. Drives process improvements, fosters collaboration, and provides empathetic leadership to consistently deliver superior software. Proven expertise in building and nurturing inclusive, high-performing engineering teams.',
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

Most of the resume experts (professional and self-proclaimed) I talk to say I need to have this stodgy persona in a resume because ATS/AI/headless resume scanners don't have the nuance to discern a capable employee from more dynamic sentence structure and a desire to make reading entertaining. That makes sense. I've worked with computers long enough to know they don't laugh at my jokes (yet).This professional summary, though, while packed with phrases that describe what I am good at, is just so deeply bland.

What is it that I do? I like to lead teams of puzzle-solving engineers to have a humane way of life while also producing high-quality software. That's really it. Also people like to partner with me because (1) I'm not a jerk and (2) I like to solve their problems, too. 

I've been doing this a long time, I'm good at it, and I'm well-adjusted enough to create a positive team culture while always looking to be better.`,
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
              text: 'Managed a 10 person engineering team (Android, iOS, Web) to improve and maintain order tracking (Kotlin, Swift, React/TypeScript) and order status notifications (email, SMS, push, Live Activities) for Grubhub and Seamless consumer apps.',
              annotations: [{
                id: createID('grubub-engineer-number'),
                title: '10-12 engineers',
                content: `## Why are you not sure about the number of engineers on your team? Were some of them in a quantum state?Were some of them ghosts?

Were some of them ghosts? No. At least I don't think so. BUT NOW I'M NOT SURE.

This is more about the fluctuation of the team members as we assumed and shed responsibilities during various restructures. Over the course of three and a half years, we usually had somewhere between 10 and 12 engineers. You might call that 11 on average. At least 10, rarely more than 12. The important part is thatI managed a large team that adapted to fluctuations in the business.`,
                linkedText: '10-12 engineers'
              }]
            },
            {
              text: 'Spearheaded the successful launch of MVPs on various projects e.g., item substitution workflows (reducing order cancellations by 5% and customer service inquiries by 10%) and implementing PIN verification (saving $6M annually).',
              annotations: [{
                id: createID('grubhub-pin-verification'),
                title: 'PIN verification',
                content: `## PIN Verification: What is it?
You've seen this before, not just in the Grubhub/Seamless app but other apps where handshakes (metaphorical or literal) help to thwart ne'er-do-wells and to avoid well-meaning mistakes. The problem was that food-eaters wanted to eat their food but couldn't find it even though it'd been marked as delivered. So we added a process for verifying that the food-eater and the deliverer were both at the right place, right time, and the delivery was in tact.

![Food Bandit Thwarted!](./images/grubhub-pin-verification.webp)

### What was your part?
Thanks so much for asking. Our team was responsible for showing the food-eater the PIN in the post purchase/order tracking screen. We decoupled it from the rest of the PIN generation process which made it a lot easier to: (1) roll out indpendently and (2) allow us finish very quickly with limited complexity. We also added PIN updates to food-eater notifications, which we were also responsible for, and into order details to make sure it was in as many places as possible.

### Did people still miss it?
All the time. Just, like, all the time. Most found it but a select number of peoplestill couldn't find it. We were in the middle of building the next iteration to make it easier to find in the noise and to improve the notification experience when I left the company.

### But did it work?
Yeah! We dropped the number of contacts to customer service for missed deliveries which was the goal and that saved $6MM annually. If you're interested in more, feel free to drop me a line.`,
                linkedText: 'PIN verification'
              }]
            },
            {
              text: 'Promoted iterative development for existing features focused on enhanced order clarity for consumers (example: added transparency for bundled orders, which decreased delivery estimate inquiries by 20%, saving $1M annually) and merchants (example: automated process to dispute attribution charges).',
              annotations: [{
                id: createID('grubhub-iterative-development'),
                title: '"iterative development"',
                content: `## Iterative means data-driven through testing
"Iterative" at the surface is just a way to describe pushing out smaller updates to a feature in an effort to improve it in tangible, easier-to-deliver chunks. It's the best way to do software. Honestly, the other ways to do software seem to be methods to drive engineers into madness. But inherent in iterative development is that you can also test and measure smaller updates to make sure you're on the right track. Have a North Star, build toward the North Star, realize that the North Star is acutally in a slightly different place in the sky.

You'll see littered down below experience with A/B testing. At Cuyana, this was Optimizely. At Beautycounter, we were at the forefront of using Optimizely Full Stack (with Cloudflare integration). And at Grubhub, this was using Taplytics. A/B testing is an important part of building an application that people like and isn't just based on the whims of people that aren't necessarily the target users. The methodology needs to make sure what we're testing is actually important. What's the point of testing something that is table stakes and, if it failed, we needed to implement anyway (an example: legally-required messaging about alcohol substitutions)? Working with Product and stakeholders to get to the right MVP and then knowing what the value is in testing it (what do we measure?) is part of the engineering manager's job or at least part of their influence.`,
                linkedText: 'iterative development'
              }]
            },
            {
              text: 'Established a consistent design document process, encouraging clearer communication and collaboration, standardizing design patterns, and streamlining the release procedure which reduced timeline overages and allowed for more consistent releases.',
              annotations: [{
                id: createID('grubhub-timeline-overages'),
                title: '"reduced timeline overages"',
                content: `## What does 'timeline overages by 25%' even mean?

In the aftermath of a long, onorous project, we came together as a team to figure out why it was both long and onorous. We learned that the project exacerbated existing issues: engineers estimating based on optimistic assumptions and things taking longer than they thought; other engineers and teams weren't always on the same page if we needed things from them; and requirements that seemed clear but weren't. We'd been able to limp through smaller work based on our team's great collaborative and communicative environment but this large project really blew those problems up. As large projects are wont to do.

So I revamped the software development process for our team which required more upfront organization and investigation. This included splitting the project and engineering kickoffs, requiring design documents like RFCs for projects and getting reviews from all engineers involved. By the end of the engineering kickoff, product, design, and engineering across the org would be on the same page. This saved us a lot of pivoting and juking throughout a feature and allowed us to both ask good questions and deliver, if not faster, at least more consistently on time. 

It worked so well, we spread it to other teams in our organization and I wrote documentation for our implementation so that others could contribute. We also had kaizens to continue to improve the process which engineers and partners were very involved in. They resulted in standardizing the amount of detail in the design documents and using Google Docs for the documents rather than Github to allow for more input by non-engineers.
`,
                linkedText: 'reduced timeline overages'
              }]
            },
            { text: 'Directed the enhancement of a marketing technology platform, encompassing the implementation of improved source control management, standardized release cycles, establishment of on-call rotations, and advancements in the platform\'s efficiency and reliability, concurrent with the deployment of new features.' },
            { text: 'Collaborated with product/program managers, design, business insights, and fellow engineering teams to formulate roadmaps, organize capacity planning, and prioritize projects to effectively deliver iterative and testable features based on user demands.' },
            { text: 'Oversaw a 4 person backend Java/Kotlin engineering team which operated services for vital data APIs for customer support agent tools and order tracking frontend capabilities.' },
            { text: 'Coached and guided engineers at varying levels (staff, senior, and junior) on goal-setting aligning with both company objectives and individual career development, providing a path to promotion opportunities.',
              annotations: [{
                id: createID('grubhub-mentoring-levels'),
                title: '"staff, senior, and junior"',
                content: `## Okay, but what do those levels mean for me?

Industry titles don't necessarily map cleanly for every company. I managed Staff, Senior, Software Engineer 2, and Software Engineer 1 team members. SE1 at Grubhub was (usually) just above an associate engineer (just out of college or a career change) so your quintessential junior engineer. SE2 is that mid-level engineer transitioning into the independence of a Senior engineer. 

Some helpful approximate mapping from <a href="https://www.levels.fyi/?compare=Grubhub,Google,DoorDash,Airbnb,Microsoft&track=Software%20Engineer" target="_blank" rel="noopener">levels.fyi</a>:

|Company|SE1|SE2|Senior|Staff|
|---|---|---|---|---|
|Airbnb|G7/Engineer|G8/Engineer|G9/Senior|G9/Senior|
|Apple|ICT2/Jr|ICT3/SE|ICT4/Senior|ICT4/Senior|
|DoorDash|E3|E4|E4|E5|
|Google|L3/SWEII|L4/SWEIII|L4/SWEIII|L5/Senior|
|Microsoft|SDE 59/60|SDE2 61/62|Senior 63|Senior 64|
|Netflix|L3/Engineer|L4/Engineer II|L5/Senior|L5/Senior|
|Uber|3/SE1|4/SE2|5a/Senior|5a/Senior|

PS: I've vacillated between this wording and spelling out all the levels so it doesn't elide SE2 specifically. I'm going with this for now because it's less wordy. I guess? I may change it later.
`,
                linkedText: 'staff, senior, and junior'
              },
              {
                id: createID('grubhub-growth-beyond'),
                title: '"individual career development"',
                content: `## Is individual career development different from a promotion path?
I think so! Promotion paths are a tangible shorthand for growth. Getting to the next level at company is empirical evidence that you have grown. And it's good. I want engineers to get promoted. There are no losers in that sceenario. But sometimes promotion tracks can be narrowly focused on a company's principles and needs which may or may not translate to the larger industry and personal growth is sacrficed for the company's whims. 

I like to focus growing engineers for their careers. This isn't IBM in the '50s; engineers are not going to be lifers with a penision. Transition is inevitable so I like to focus on creating good engineering habits for their work/life balance and their continuing education. It's a more holistic approach that keeps the trends of the modern industry in mind.
`,
                linkedText: 'individual career development'
              }
          ]},
            { text: 'Contributed to recruitment by conducting screenings and interviews (system architecture, coding, and behavioral) and helped modernize the interview process with AI considerations.' },
            { text: 'Served as scrum master and Jira administrator for the team in an Agile setting with continuous integration (CI/CD).',
              annotations: [{
                id: createID('grubhub-scrum-master'),
                title: '"CI/CD"',
                content: `## That parenthetical CI/CD looks weird. Why did you add it?
That's mostly for the robots. I've worked with a number of CI/CD pipelines (Github Actions, Jenkins, proprietary in-house builds) but not enough for me to add as a bullet. I wanted to note here that we built our development processes around the fact that we have continuous integration which is different than having some DevOps person or all-time release engineer doing the merges for you. My favorite has been a trunk-based development which means that anything an engineer merges can be put to production at anytime. Yes, that can be stressful but also puts a lot of trust in the engineer. We learn really quick how to be safe, engaged, and defensive in our code. Not something you'd be able to do at, say, Boeing but the thought process (investing in engineers to be empowered) is the right tact.`,
                linkedText: 'CI/CD'
              }]
            }
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
              text: 'Led 8 software engineers across two teams in feature development and maintenance of an e-commerce platform: a web team using React, NodeJS, and GraphQL; and an iOS team building in Swift.'
            },
            {
              text: 'Owned shopping funnel and post purchase experience for beautycounter.com and the iOS app and launched dozens of initiatives including sampling, password security, dynamic widgets, and a blog re-platform.',
              annotations: [{
                id: createID('beautycounter-features'),
                title: '"dozens of initiatives"',
                content: `## So dozens means more than just these four?
Yeah, many more. As noted elsewhere, the frontends team was in charge of every consumer-facing interface except for the checkout flow (and even so, this team worked on elements in checkout, too). So things like Beautycounter Live (live video streams from the Abbot Kinney store in Venice, CA), user-generated content organization, language options and translations, quick add to cart from category pages, and many others that wouldn't fit into 40 words or fewer. I chose these four because they cover some of the basics that the team was in charge of.

![Sampling and Dynamic Widgets!](./images/beautycounter-project-examples.webp)

__Sampling:__ By purchasing products (or, in some cases, just by being a special type of customer), you could add samples of other products to your cart. So buy some sunscreen, get a free packet of face lotion. The types of samples needed to be: (1) updated by stakeholders easily, (2) added to orders only in certain conditions and (3) sometimes could also be purchased by certain customer types. A lot of business logic went into building this feature and which required a lot of back and forth non-engineer partners (Product and stakeholders alike) to make sure the rules were right and the right samples were available for a given month.

__Dynamic Widgets:__ The inevitable position you are put in when using a service like Contentful is that you will run out of Content Types (the units of forms from which you can build instances of your content). You can create seventy gajillion records (instances of content) but the money comes in from how many Content Types are available to you. You have to jump pricing tiers in order to get more. So we created a Content Type (and subtypes based on single form elements)that allowed a reference block to add in generic widgets based on other Content Types. Drag and drop your widgets and form elements to create a page.

__Password Security:__ Because of the nature of Beautycounter's business and the lobby of people that sold Beautycounter products in the field, passwords were something of a problem (some sales associates would compromise a client's password security to do full concierge shopping on thier behalf). So we found a way to ensure that passwords were more secure, created a process to reset passwords so they fit criteria that made them difficult to guess, and updated the flow for recovering passwords. This was in conjunction to a Concierge flow that allowed sales associates to create orders for clients without actually logging in as the someone else.

__Blog Re-Platform:__ The blog had been rotting on the site for forever and it was high time to do something about it. Trouble was that, it'd been decaying for so long, no one remembered how to actually update it, logins were mysteries, and the engineers we had were not versed in updating PHP. So we converted the WordPress site to a headless CMS and imported the content into a website so that we could update both the templates and content ourselves in the React-based site without having to divine the mysteries of Beautycounter employees of yore. We got to keep the old content (and refresh it) while also giving it the fresh, clean look the website had to offer.
`,
                linkedText: 'dozens of initiatives'
              }]
            },
            {
              text: 'Co-architected the career framework for the technology department.',
              annotations: [{
                id: createID('beautycounter-career-framework'),
                title: '"career framework"',
                content: `## Career Framework?
There wasn't a clear trajectory for engineers to rise through the ranks. There were frontend and backend developers, a director, a principal engineer, and a CTO. But as the engineering practice started to get larger and more complex, particularly with the need for tech lead and engineering manager roles, the time had come for the little startup to be a grown-up about how people could get promoted and how their role matched across their industry. 

So I teamed up with another engineering manager/tech lead to create a framework for what the levels looked like, came up with job descriptions, and created balanced tracks for ICs, managers, and architects. We presented it to our executive sponsors and we suddenly had job titles that made sense. This laddered into HR and review periods which we also helped to shape.`,
                linkedText: 'career framework'
              }]
            },
            {
              text: 'Based a positive team culture on psychological safety, peer education, continual improvement, and career advancement and trajectory through coaching and mentoring focused on empathy.'
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
              text: 'Built a new interface for checkout flow within the first two months.'
            },
            {
              text: 'Engineered new features, fixed production issues, and maintained the codebase.'
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
              text: 'Assisted in front end initiatives for customer-facing platforms, including the responsive website.'
            },
            {
              text: 'Built frontends for new modules in Sass and vanilla JavaScript in Magento 1.9 templates for new initiatives.',
              annotations: [{
                id: createID('cuyana-magento'),
                title: 'Magento',
                content: `## Yes, I have Magento experience.
I have Magento experience from TOMS, Cuyana, and Beautycounter. I know some people love it and it's a great tool for e-commerce to get up and running without (1) ceding control like you might with Shopify or (2) having to deal with the complexity of building a custom checkout flow from scratch. I rationally understand the pros of adopting Magento as your platform. Please don't contact me about Magento jobs.`,
                linkedText: 'Magento 1.9'

              }
            ],
            },
            {
              text: 'Created interfaces for marketing initiatives (landing pages and emails).'
            },
            {
              text: 'Provided assistance in creating guidelines for processes and workflows.'
            },
            {
              text: 'Leveraged Optimizely for A/B tests of product improvements.'
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
              text: 'Developed solutions using jQuery, MooTools, and Prototype.'
            },
            {
              text: 'Developed performance-enhancing strategies for Magento environments.'
            },
            {
              text: 'Participated in design reviews, architectural assessments, code reviews, and LOE as front-end SME'
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
## Engineering Leadership

This kind of is a concise version of the entire resume without the specific but, let's go.

### Key Aspects
- Team management and mentorship
- Technical decision-making
- Process optimization
- Cross-functional collaboration

### Impact
- Led teams of 6-12 engineers and multiple teams simulteonously
- Implemented standardized design processes
- Optimized release workflows
- Fostered team growth and development
- Delivered important features and improvements on time
`,
        linkedText: 'Engineering leadership'
      }]
    },
    {
      name: 'Coaching/Mentorship',
      category: CompetencyCategory.LEADERSHIP
    }, 
    {
      name: 'Feature rollout',
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
      category: CompetencyCategory.COMMUNICATION,
      annotations: [{
        id: createID('creative-writing'),
        title: '"Creative Writing"',
        content: `## Creative Writing

You can see from my Education section that I don't have a Science degree but an Art degree, specifically writing for film and video. I do a lot of creative writing in my free time. Novel-writing, short stories, screenplays, podcasts, television reviews/recaps, etc. I love the art and engineering in crafting a sensible narrative. It's why I also include "Storytelling" later on since it is the thing I'm actually trained in and not just the thing I have a lot of experience doing. Feel free to ask me about any of it.`,
        linkedText: 'Creative writing'
      }]
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
      name: 'React, Headless CMS, A/B Testing, GitHub Actions, Jenkins, AWS, GCP',
      category: TechnologyCategory.TECHNOLOGIES,
    },
    {
      name: 'Jira, Asana, Contentful, Optimizely, LaunchDarkly, Figma, Adobe Creative Suite',
      category: TechnologyCategory.TOOLS,
    },
    {
      name: 'Cursor, Gemini, Claude, Firefly',
      category: TechnologyCategory.AI,
    },
    {
      name: 'Agile, Scrum, Design Documents, DevEx, DORA, SPACE',
      category: TechnologyCategory.PROCESSES,
    },
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

These were reviews and recaps of television episodes. My beat consisted of _Pretty Little Liars_, _Supergirl_, _Scandal_, and occasionally filling in on _The Flash_ and _Arrow_. I started at TV.com until they were bought by CBS Interactive (and eventually pushed onto that great internet ice floe along with earlier reviews of _Arrested Development_ and other early 2010s shows, the reviews now lost to time) and then I was folded into TVGuide.com. 

The reviews and recaps were in the vein of Television Without Pity with less cruelty and meant to have more fun with the fans. Fans, I learned, are not to be trifled with. Am I a more evolved person almost a decade later? Hopefully. But also some are still funny in a _not_ cringy way so I leave them here as a button on a mostly bland document of my career. I can do all these engineering leadership things but also I have copious thoughts on how the Ezria ship from _PLL_ is morally objectionable.
`,
        linkedText: 'TV.com and TVGuide.com'
      }]
    }
  ]
}; 