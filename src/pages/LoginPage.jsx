import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa'; // Importing icons from react-icons
import styles from './LoginPage.module.css';
import bgImage from '../assets/login.jpeg';
import TextInput from '../components/TextInput';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    userName: '',
    password: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://localhost:7240/api/Auth/stafflogin', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Login successful! 🎉');
        // You can redirect user here if needed
      } else {
        const error = await response.json();
        alert(`Login failed: ${error.message || 'Invalid credentials'}`);
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <div className={styles.formSection}>
          <h2 className={styles.loginTitle}>Welcome Back</h2>
          <p className={styles.loginSubtitle}>Login to Continue</p>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              {/* <label htmlFor="userName">Username</label> */}
              <TextInput
                type="text"
                id="userName"
                placeholder="Enter your username"
                required
                onChange={handleChange}
                icon={<FaUser />} // Using FaUser icon
              />
            </div>
            <div className={styles.formGroup}>
              {/* <label htmlFor="password">Password</label> */}
              <TextInput
                type="password"
                id="password"
                placeholder="Enter your password"
                required
                onChange={handleChange}
                icon={<FaLock />} // Using FaLock icon
              />
            </div>
            <button type="submit" className={styles.loginButton}>Login</button>
          </form>
          <div className={styles.accountText}>
            Don't have an account? <Link to="/signup">Create Account</Link>
          </div>
        </div>
  
        <div className={styles.imageSection} style={{ backgroundImage: `url(${bgImage})` }}></div>

      </div>
    </div>
  );
};

export default LoginPage;