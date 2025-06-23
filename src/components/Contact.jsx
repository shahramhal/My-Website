import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    
    // Simulate sending - replace with actual form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSending(false);
    setSent(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSent(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            className={`submit-btn ${sending ? 'sending' : ''} ${sent ? 'sent' : ''}`}
            disabled={sending || sent}
          >
            {sending ? 'Sending...' : sent ? 'Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
