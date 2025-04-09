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
    <section id="contact" aria-label="Contact Information">
      <ul>
        <li id="contact-city">{contact.city}</li>
        <li id="contact-linkedin">
          <a 
            href={contact.linkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            {contact.linkedIn.displayText}
          </a>
        </li>
        <li id="contact-email">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              onContactClick();
            }}
            aria-label="Open contact form"
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