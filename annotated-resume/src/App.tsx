import { useState, lazy, Suspense } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import './App.css'
import { resumeData } from './data/resumeData'
import JobEntry from './components/JobEntry'
import ContactSection from './components/ContactSection'
import SchoolEntry from './components/SchoolEntry'
import PublicationEntry from './components/PublicationEntry'
import ThemeToggle from './components/ThemeToggle'

// Lazy load the contact form
const ContactForm = lazy(() => import('./components/ContactForm'))

/**
 * App - Main application component
 */
function App() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggle />
        <main role="main" aria-label="Resume content">
          <h1>{resumeData.name}</h1>
          
          <ContactSection 
            contact={resumeData.contact}
            onContactClick={() => setIsContactFormOpen(true)}
          />

          <section 
            id="professional-summary" 
            aria-label="Professional Summary"
            role="region"
            className="text-left"
          >
            <h2>Professional Summary</h2>
            <p>{resumeData.summary}</p>
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
                  {competency.name}
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
                <PublicationEntry key={idx} publication={publication} />
              ))}
            </ul>
          </section>
        </main>
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
    </ThemeProvider>
  );
}

export default App;
