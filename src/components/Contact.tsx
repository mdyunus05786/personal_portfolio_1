import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

/**
 * Contact Form Setup Instructions:
 * 
 * 1. Go to https://web3forms.com/
 * 2. Sign up for a free account
 * 3. Get your Access Key
 * 4. Replace 'YOUR_ACCESS_KEY_HERE' on line 32 with your actual access key
 * 5. Update your email, phone, and location details below (lines 85-110)
 * 
 * The form will automatically email submissions to the email address 
 * associated with your Web3Forms account.
 */

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'e4ca4d93-c4e4-4b0e-b78e-0ce580479a52',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section section--cream">
      <div className="container">
        <h2 className="section-title">
          Get In Touch
        </h2>
        <div className="section-divider"></div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <p className="contact-text" style={{ textAlign: 'center' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-icon contact-icon--red">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="contact-title">Email</h3>
                  <a href="mailto:yunu9297@stthomas.edu" className="contact-link">
                    yunu9297@stthomas.edu
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon contact-icon--dark">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="contact-title">Phone</h3>
                  <a href="tel:+17632215667" className="contact-link">
                    +1 763 221 5667
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon contact-icon--red">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="contact-title">Location</h3>
                  <p className="contact-text">
                    St Paul, Minnesota, USA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="form-card">
            <div>
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="form-input form-textarea"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="form-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div style={{ 
                marginTop: '1rem', 
                padding: '1rem', 
                backgroundColor: '#d4edda', 
                color: '#155724', 
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                Thank you for your message! I will get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div style={{ 
                marginTop: '1rem', 
                padding: '1rem', 
                backgroundColor: '#f8d7da', 
                color: '#721c24', 
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                Oops! Something went wrong. Please try again or email me directly.
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>© 2026 Mohammed Yunus. All rights reserved.</p>
      </div>
    </section>
  );
}