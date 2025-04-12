import { useState, lazy, Suspense } from 'react'
import { useTheme } from '../../context/ThemeContext'
import './App.css'
import { resumeData } from '../../data/resumeData'
import { JobEntry } from '../resume/JobEntry'
import { ContactSection } from '../forms/ContactSection'
import { SchoolEntry } from '../resume/SchoolEntry'
import { AnnotatedText } from '../common/AnnotatedText'
import { ThemeToggle } from '../common/ThemeToggle'

// Lazy load the contact form
const ContactForm = lazy(() => import('../forms/ContactForm').then(module => ({ default: module.ContactForm })))

/**
 * App - Main application component
 */
const App = () => {
  const { theme } = useTheme();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <header className="mb-8">
          <h1 className="font-bold mb-2">{resumeData.name}</h1>
          <ContactSection 
            contact={resumeData.contact}
            onContactClick={() => setIsContactFormOpen(true)}
          />
        </header>

        <main>
          <section className="mb-8">
            <h2 className="font-semibold mb-4">Professional Profile</h2>
            <p>
              <AnnotatedText
                text={resumeData.summary.text}
                annotations={resumeData.summary.annotations}
              />
            </p>
          </section>

          <section 
            id="work-experience" 
            aria-label="Work Experience"
            role="region"
            className="text-left"
          >
            <h2>Work Experience</h2>
            <div role="list">
              {resumeData.experience.map((job) => (
                <JobEntry key={job.id} job={job} />
              ))}
            </div>
          </section>

          <section 
            id="education" 
            aria-label="Education"
            role="region"
            className="text-left"
          >
            <h2>Education</h2>
            <div role="list">
              {resumeData.education.map((school) => (
                <SchoolEntry key={school.id} school={school} />
              ))}
            </div>
          </section>

          <section 
            id="competencies" 
            aria-label="Core Competencies"
            role="region"
            className="text-left"
          >
            <h2>Core Competencies</h2>
            <ul 
              className="competencies-list columns-3"
              role="list"
              aria-label="List of competencies"
            >
              {resumeData.competencies.map((competency, idx) => (
                <li 
                  key={idx}
                  role="listitem"
                  aria-label={competency.name}
                >
                  <AnnotatedText
                    text={competency.name}
                    annotations={competency.annotations?.map(annotation => ({
                      ...annotation,
                      linkedText: annotation.linkedText || competency.name
                    }))}
                  />
                  {competency.description && (
                    <span className="sr-only">
                      {competency.description}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section 
            id="technologies" 
            aria-label="Technologies"
            role="region"
            className="text-left"
          >
            <h2>Technologies</h2>
            <ul role="list" aria-label="List of technologies">
              {resumeData.technologies.map((technology, idx) => (
                <li 
                  key={idx}
                  role="listitem"
                  aria-label={`${technology.name} - ${technology.proficiency || 'proficient'}`}
                >
                  <strong>{technology.category}: </strong>
                  {technology.name}
                  {technology.proficiency && (
                    <span className="sr-only">
                      Proficiency level: {technology.proficiency}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
          
          <section 
            id="publications" 
            aria-label="Publications"
            role="region"
            className="text-left"
          >
            <h2>Publications</h2>
            <ul role="list" aria-label="List of publications">
              {resumeData.publications.map((publication, idx) => (
                <li key={idx} role="listitem">
                  <AnnotatedText
                    text={publication.title}
                    annotations={publication.annotations?.map(annotation => ({
                      ...annotation,
                      linkedText: annotation.linkedText || publication.title
                    }))}
                  />
                  {publication.link && (
                    <a 
                      href={publication.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-theme-hover hover:underline ml-2"
                    >
                      (Link)
                    </a>
                  )}
                  <span className="text-theme-text/80 ml-2">
                    {publication.description}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
      {isContactFormOpen && (
        <Suspense fallback={
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="loading-indicator" role="status" aria-label="Loading contact form">
                Loading contact form...
              </div>
            </div>
          </div>
        }>
          <ContactForm 
            isOpen={isContactFormOpen}
            onClose={() => setIsContactFormOpen(false)}
          />
        </Suspense>
      )}
    </div>
  );
}

export default App;
