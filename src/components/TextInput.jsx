import React, { useState } from 'react';
import './TextInput.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing eye icons
const TextInput = ({ icon, placeholder, type = "text", value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="text-input-container">
      {icon && <div className="icon-container">{icon}</div>}
      <input
        type={type === "password" && showPassword ? "text" : type}
        className="text-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {type === "password" && (
        <div className="toggle-password" onClick={togglePasswordVisibility}>
          {showPassword ? '👀': '🙈'}
        </div>
      )}
    </div>
  );
};

export default TextInput;