import React, { useState } from 'react';
import styles from './SignUpPage.module.css';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    userName: '',
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // const response = await fetch('https://localhost:7240/api/Auth/staffregister', {
      const response = await fetch(`${process.env.REACT_APP_BOOKNEST_URL}/Auth/staffregister`, {

        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Khata Khulyo! Hehe 😁😏😏 ");
      } else {
        const error = await response.json();
        alert(`Registration failed: ${error.message || 'Unknown error'}`);
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupForm}>
        <h2 className={styles.signupTitle}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="userName">Username</label>
            <input type="text" id="userName" placeholder="Enter a username" required onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" placeholder="Enter your first name" required onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" placeholder="Enter your last name" required onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="Enter your address" required onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Create a password" required onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder="Confirm your password" required onChange={handleChange} />
          </div>
          <button type="submit" className={styles.signupButton}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
