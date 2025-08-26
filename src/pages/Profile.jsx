import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';
import profilePic from '../assets/profile.jpg';
import { Link } from 'react-router-dom';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaQuoteLeft
} from 'react-icons/fa';

const dummyMembers = [
  {
    id: 1,
    name: 'Keerthana Raj',
    email: 'keerthana@example.com',
    role: '🌟🌟🌟🌟',
    image: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    id: 2,
    name: 'Ravi Kumar',
    email: 'ravi@example.com',
    role: '🌟🌟🌟🌟🌟',
    image: 'https://randomuser.me/api/portraits/men/43.jpg'
  },
  {
    id: 3,
    name: 'Divya S',
    email: 'divya@example.com',
    role: '🌟🌟🌟🌟',
    image: 'https://randomuser.me/api/portraits/women/72.jpg'
  },
  {
    id: 4,
    name: 'Suresh Babu',
    email: 'suresh@example.com',
    role: '🌟🌟🌟🌟🌟',
    image: 'https://randomuser.me/api/portraits/men/51.jpg'
  },
  {
    id: 5,
    name: 'Priya M',
    email: 'priya@example.com',
    role: '🌟🌟🌟🌟🌟',
    image: 'https://randomuser.me/api/portraits/women/85.jpg'
  }
];

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get('/api/auth/home', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {user && (
        <div className="profile-banner">
          <div className="profile-header">
            <h1>MY PROFILE</h1>
            <img src={profilePic} alt="User" className="banner-img" />
            <div className="profile-details">
              <h2>{user.name}</h2>
              <p className="role-badge">👑 Owner of Discover Dharmapuri Tourism Service</p>
              <p><FaEnvelope /> abinaya@gmail.com</p>
              <p><FaMapMarkerAlt /> Dharmapuri, Tamil Nadu</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p className="bio">
                Dedicated to promoting the culture, heritage, and hidden gems of Dharmapuri.
                Passionate about enhancing travel experiences for visitors.
              </p>
              <p className="quote">
                <FaQuoteLeft className="quote-icon" /> "Let the world discover the charm of Dharmapuri!" 🌿✨
              </p>
              <Link to="/"><button style={{ backgroundColor: '#4c99afff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer',marginBottom:'2px'}}>Explore</button></Link> <br />
              <Link to="/admin"><button style={{ backgroundColor: '#4c99afff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>Admin Panel</button></Link>
            </div>
          </div>
        </div>
      )}
      <div className="member-section">
        <h3>🌟 Top 5 Connected Members with Reviews</h3>
        <div className="member-grid">
          {dummyMembers.map((member) => (
            <div className="member-card" key={member.id}>
              <img src={member.image} alt={member.name} className="member-img" />
              <h4>{member.name}</h4>
              <p className="role">{member.role}</p>
              <p className="email">{member.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
