import { memo } from 'react';
import { ContactInfo } from '../types/resume';

interface ContactSectionProps {
  contact: ContactInfo;
  onContactClick: () => void;
}

/**
 * ContactSection - Displays contact information and handles contact form interaction
 * @param {ContactInfo} contact - The contact information to display
 * @param {function} onContactClick - Handler for contact form interaction
 */
const ContactSection = memo(({ contact, onContactClick }: ContactSectionProps) => {
  return (
    <section 
      id="contact" 
      aria-label="Contact Information"
      className="mt-8 mb-12 flex align-center justify-center"
    >
      <ul className="flex gap-4 list-none p-0 inline">
        <li 
          id="contact-city"
          className="block"
        >
          {contact.city}
        </li>
        <li 
          id="contact-linkedin"
          className="inline"
        >
          <a 
            href={contact.linkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-theme-text hover:text-theme-hover transition-colors duration-200"
          >
            {contact.linkedIn.displayText}
          </a>
        </li>
        <li 
          id="contact-email"
          className="inline"
        >
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              onContactClick();
            }}
            aria-label="Open contact form"
            className="text-theme-text hover:text-theme-hover transition-colors duration-200 cursor-pointer"
          >
            Contact Me
          </a>
        </li>
      </ul>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection; 