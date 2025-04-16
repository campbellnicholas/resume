import { useState, useEffect, useRef } from 'react';
import { FormErrors } from '../../types/form';
import { ErrorBoundary } from '../common/ErrorBoundary';

interface ContactFormProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

type FormStatus = 'idle' | 'submitting' | 'submitted' | 'error' | 'rate-limited';

interface FormData {
  readonly name: string;
  readonly email: string;
  readonly message: string;
  readonly _gotcha: string; // Honeypot field
}

/**
 * Modal form component for contact information
 * @param isOpen - Controls modal visibility
 * @param onClose - Handler for closing the modal
 * @returns A modal dialog containing a contact form
 */
const ContactFormComponent = ({ isOpen, onClose }: ContactFormProps): React.ReactElement | null => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    _gotcha: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const lastInputRef = useRef<HTMLTextAreaElement>(null);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      // Store the element that triggered the modal
      const triggerElement = document.activeElement as HTMLElement;
      
      // Focus the first input when modal opens
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 0);

      // Handle focus trap
      const handleFocusTrap = (e: KeyboardEvent): void => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstInputRef.current) {
              e.preventDefault();
              closeButtonRef.current?.focus();
            }
          } else {
            // Tab
            if (document.activeElement === lastInputRef.current) {
              e.preventDefault();
              closeButtonRef.current?.focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleFocusTrap);

      return () => {
        document.removeEventListener('keydown', handleFocusTrap);
        // Return focus to the trigger element when modal closes
        triggerElement?.focus();
      };
    }
  }, [isOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    
    // Check rate limiting
    const now = Date.now();
    if (now - lastSubmissionTime < 30000) { // 30 seconds
      setStatus('rate-limited');
      return;
    }
    
    if (!validateForm()) return;
    
    setStatus('submitting');
    
    try {
      const response = await fetch(`https://formspree.io/f/${process.env.VITE_FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('submitted');
        setFormData({ name: '', email: '', message: '', _gotcha: '' });
        setLastSubmissionTime(now);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay" 
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-form-title"
      aria-describedby="contact-form-description"
      ref={modalRef}
    >
      <div className="modal-content text-left flex flex-col justify-center relative">
        <h2 id="contact-form-title">Contact Me</h2>
        <p id="contact-form-description" className="text-sm my-2">
          I would give you my email but I don't know you (probably) so leave a message.
        </p>
        <button
          ref={closeButtonRef}
          className="close-button absolute right-4 top-4 text-2xl"
          onClick={onClose}
          aria-label="Close contact form"
        >
          &times;
        </button>
        <form 
          onSubmit={handleSubmit}
          className="contact-form"
          noValidate
          aria-busy={status === 'submitting'}
        >
          {status === 'submitted' ? (
            <div 
              className="success-message"
              role="alert"
              aria-live="polite"
              aria-atomic="true"
            >
              Thank you for your message! I'll get back to you soon.
            </div>
          ) : status === 'error' ? (
            <div 
              className="error-message"
              role="alert"
              aria-live="polite"
              aria-atomic="true"
            >
              Sorry, there was an error sending your message. Please try again or contact me through LinkedIn.
            </div>
          ) : status === 'rate-limited' ? (
            <div 
              className="error-message"
              role="alert"
              aria-live="polite"
              aria-atomic="true"
            >
              Please wait a moment before sending another message. This helps prevent spam.
            </div>
          ) : (
            <>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  ref={firstInputRef}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  aria-required="true"
                  required
                  disabled={status === 'submitting'}
                />
                {errors.name && (
                  <span id="name-error" className="field-error" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-required="true"
                  required
                  disabled={status === 'submitting'}
                />
                {errors.email && (
                  <span id="email-error" className="field-error" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  ref={lastInputRef}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  aria-required="true"
                  required
                  disabled={status === 'submitting'}
                />
                {errors.message && (
                  <span id="message-error" className="field-error" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Honeypot field */}
              <div className="hidden">
                <label htmlFor="_gotcha">Don't fill this out if you're human</label>
                <input
                  type="text"
                  id="_gotcha"
                  name="_gotcha"
                  value={formData._gotcha}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

/**
 * Wrapped version of ContactForm with error boundary
 */
export const ContactForm = (props: ContactFormProps): React.ReactElement | null => (
  <ErrorBoundary>
    <ContactFormComponent {...props} />
  </ErrorBoundary>
); 