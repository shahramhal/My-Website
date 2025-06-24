import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
    .then(() => {
      setFeedbackMessage("Thank you! Your message has been sent.");
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(error => {
      setFeedbackMessage(`Error: ${error}`);
    });
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

        <form
          className="contact-form"
          name="contact" // Name must match the hidden form
          method="POST"
          onSubmit={handleSubmit}
        >
          {/* Note: We do NOT need data-netlify="true" on this form because the hidden one handles detection */}
          <input type="hidden" name="form-name" value="contact" />

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

          <button type="submit" className="submit-btn">
            Send Message
          </button>
          
          {feedbackMessage && <p style={{marginTop: '1rem', textAlign: 'center'}}>{feedbackMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;