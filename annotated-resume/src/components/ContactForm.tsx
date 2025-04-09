import { useState, useEffect, useRef } from 'react';
import { FormErrors } from '../types/form';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormStatus = 'idle' | 'submitting' | 'submitted' | 'error' | 'rate-limited';

/**
 * ContactForm - Modal form component for contact information
 * @param {boolean} isOpen - Controls modal visibility
 * @param {function} onClose - Handler for closing the modal
 */
const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    _gotcha: '' // Honeypot field
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
      const handleFocusTrap = (e: KeyboardEvent) => {
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
    const handleEscape = (e: KeyboardEvent) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      const response = await fetch('https://formspree.io/f/your-form-id', {
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
    } catch (error) {
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
      ref={modalRef}
    >
      <div className="modal-content">
        <h2 id="contact-form-title">Contact Me</h2>
        <button
          ref={closeButtonRef}
          className="close-button"
          onClick={onClose}
          aria-label="Close contact form"
        >
          ×
        </button>
        <form 
          onSubmit={handleSubmit}
          className="contact-form"
          noValidate
        >
          {status === 'submitted' ? (
            <div 
              className="success-message"
              role="alert"
              aria-live="polite"
            >
              Thank you for your message! I'll get back to you soon.
            </div>
          ) : status === 'error' ? (
            <div 
              className="error-message"
              role="alert"
              aria-live="polite"
            >
              Sorry, there was an error sending your message. Please try again or contact me through LinkedIn.
            </div>
          ) : status === 'rate-limited' ? (
            <div 
              className="error-message"
              role="alert"
              aria-live="polite"
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
                  required
                  disabled={status === 'submitting'}
                />
                {errors.name && (
                  <span id="name-error" className="field-error">
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
                  required
                  disabled={status === 'submitting'}
                />
                {errors.email && (
                  <span id="email-error" className="field-error">
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
                  required
                  disabled={status === 'submitting'}
                />
                {errors.message && (
                  <span id="message-error" className="field-error">
                    {errors.message}
                  </span>
                )}
              </div>

              <div className="honeypot-field">
                <label htmlFor="_gotcha">Leave this field empty</label>
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

              <div className="form-actions">
                <button 
                  type="button" 
                  onClick={onClose}
                  disabled={status === 'submitting'}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm; 