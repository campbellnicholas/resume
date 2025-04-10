import { useState, lazy, Suspense } from 'react'
import { useTheme } from './context/ThemeContext'
import { AnnotationProvider } from './context/AnnotationContext'
import './App.css'
import { resumeData } from './data/resumeData'
import JobEntry from './components/JobEntry'
import ContactSection from './components/ContactSection'
import SchoolEntry from './components/SchoolEntry'
import AnnotatedText from './components/AnnotatedText'

// Lazy load the contact form
const ContactForm = lazy(() => import('./components/ContactForm'))

/**
 * App - Main application component
 */
const App = () => {
  const { theme } = useTheme();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <AnnotationProvider>
      <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-2">{resumeData.name}</h1>
            <ContactSection 
              contact={resumeData.contact}
              onContactClick={() => setIsContactFormOpen(true)}
            />
          </header>

          <main>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Professional Profile</h2>
              <p className="text-lg">
                <AnnotatedText
                  id={resumeData.summary.annotation?.id || 'summary'}
                  text={resumeData.summary.text}
                  annotation={resumeData.summary.annotation}
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
                      id={competency.annotation?.id || `competency-${idx}`}
                      text={competency.name}
                      annotation={competency.annotation}
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
                      id={publication.annotation?.id || `publication-${idx}`}
                      text={publication.title}
                      annotation={publication.annotation}
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
    </AnnotationProvider>
  );
}

export default App;
