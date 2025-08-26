import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const handleWhatsApp = (e) => {
    e.preventDefault(); // prevent page reload

    const message = `🌐 *Tourism Contact Request*\n\n*Name:* ${userName}\n*Email:* ${userEmail}\n*Message:* ${userMessage}\n\nI would like to get more information about visiting Dharmapuri.`;
    const whatsappLink = `https://wa.me/919786009429?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="contact-container">
      <h2>📞 Contact Us</h2>
      <p>If you have any questions about visiting Dharmapuri, feel free to contact us!</p>

      <div className="contact-details">
        <form className="contact-form" onSubmit={handleWhatsApp}>
          <input
            type="text"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Tourism Office</h3>
          <p>📍 Near Bus Stand, Dharmapuri - 636701</p>
          <p>📞 +91 93450 22409</p>
          <p>✉️ Dharmapuri.tourism@gov.in</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
