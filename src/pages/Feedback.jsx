import React, { useState } from 'react';
import './Feedback.css';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Feedback() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('Thank you for your feedback!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await res.json();
        setStatus(errorData.message || 'Failed to send. Try again later.');
      }
    } catch (err) {
      setStatus('Server error. Please try again later.');
    }
  };

  return (
    <div className="feedback-container">
      <h2>Share Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Feedback"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit </button>
      </form>
      <div className='icons'><Link to="/"><FaHome size={24} /></Link></div>
      <p className="status">{status}</p>
    </div>
  );
}

export default Feedback;
