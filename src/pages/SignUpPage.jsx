import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SignupPage.module.css";
import bgImage from "../assets/signup.png";
import { FaUser, FaEnvelope, FaLock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'; // Importing icons
import TextInput from "../components/TextInput";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    userName: "",
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(
        "https://localhost:7240/api/Auth/staffregister",
        {
          // const response = await fetch(`${process.env.REACT_APP_BOOKNEST_URL}/Auth/staffregister`, {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Registration successful!");
      } else {
        const error = await response.json();
        alert(`Registration failed: ${error.message || "Unknown Error"}`);
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupForm}>
        <div
          className={styles.imageSection}
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        <div className={styles.formSection}>
          <h2 className={styles.signupTitle}>Sign Up</h2>
          <p className={styles.signupSubtitle}>No credit required!</p>
          <form onSubmit={handleSubmit}>
            <div className={styles.row}>
              <TextInput
                type="text"
                id="name"
                placeholder="Name"
                required
                onChange={handleChange}
                icon={<FaUser />} // Using FaUser icon
              />
              <TextInput
                type="text"
                id="email"
                placeholder="Email"
                required
                onChange={handleChange}
                icon={<FaEnvelope />} // Using FaEnvelope icon
              />
            </div>
            <div className={styles.row}>
              <TextInput
                type="text"
                id="phone_number"
                placeholder="Phone Number"
                required
                onChange={handleChange}
                icon={<FaPhoneAlt />} // Using FaPhone icon
              />
              <TextInput
                type="text"
                id="address"
                placeholder="Address"
                required
                onChange={handleChange}
                icon={<FaMapMarkerAlt />} // Using FaMapMarkerAlt icon
              />
            </div>
            <TextInput
              type="text"
              id="userName"
              placeholder="Username"
              required
              onChange={handleChange}
              icon={<FaUser />} // Using FaUser icon
              className={handleChange ? styles.fullInput : styles.input}
            />
            <TextInput
              type="password"
              id="password"
              placeholder="Password"
              required
              onChange={handleChange}
              icon={<FaLock />} // Using FaLock icon
              className={handleChange ? styles.fullInput : styles.input}
            />
            <TextInput
              type="password"
              id="confirmPassword"
              placeholder="Re-type password"
              required
              onChange={handleChange}
              icon={<FaLock />} // Using FaLock icon
              className={styles.fullInput}
            />
            <button type="submit" className={styles.signupButton}>
              Register
            </button>
          </form>
          <div className={styles.accountText}>
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
