import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'sent', 'error'
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setFeedbackMessage('');

    try {
      // Send the form data to our serverless function
      const response = await fetch('/netlify/functions/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('sent');
        setFeedbackMessage(result.message);
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        // Handle errors from the serverless function
        setStatus('error');
        setFeedbackMessage(result.message || 'An error occurred.');
      }
    } catch (error) {
      // Handle network errors
      console.error('Submission error:', error);
      setStatus('error');
      setFeedbackMessage('A network error occurred. Please try again.');
    }

    // Allow the user to try again after a few seconds
    setTimeout(() => {
        if (status !== 'sending') {
            setStatus('idle');
        }
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const getButtonText = () => {
      switch(status) {
          case 'sending': return 'Sending...';
          case 'sent': return 'Sent!';
          case 'error': return 'Try Again';
          default: return 'Send Message';
      }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-description">
          I'm always interested in hearing about new opportunities, collaborations, or just having a chat about technology!
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
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

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Your message here..."
              rows="5"
            />
          </div>

          <button
            type="submit"
            className={`submit-btn ${status}`}
            disabled={status === 'sending'}
          >
            {getButtonText()}
          </button>
          
          {feedbackMessage && (
            <p className={`feedback-message ${status}`}>
                {feedbackMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;