// Login.jsx 
import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleToggle = () => {
    setIsRegistering(!isRegistering);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token); // Store JWT
        setIsLoggedIn(true);
        navigate('/');
      }
    } catch (err) {
      alert('Login failed. Check credentials.');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
        phone,
      });
      if (res.status === 201) {
        alert('Registered successfully. Please login!');
        setIsRegistering(false);
        setName('');
        setPhone('');
        setEmail('');
        setPassword('');
      }
    } catch (err) {
      alert('Registration failed. Try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={isRegistering ? handleRegister : handleLogin}>
        {isRegistering && (
          <>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </>
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" style={{ margin: '10px 0', backgroundColor: isRegistering ? '#374c4eff' : '#374c4eff', color: '#fff' }}>{isRegistering ? 'Register' : 'Login'}</button>
      </form>
      <p>
        {isRegistering ? 'Already have an account?' : 'Don’t have an account?'}{' '}
        <button onClick={handleToggle}>
          {isRegistering ? 'Login here' : 'Register here'}
        </button>
      </p>
    </div>
  );
};

export default Login;
