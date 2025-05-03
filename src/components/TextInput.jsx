import React, { useState } from "react";
const TextInput = ({
  icon,
  placeholder,
  type = "text",
  onChange,
  id,
  required = true,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative flex items-center border rounded overflow-hidden w-full h-10 border-solid border-[#ccc]">
      {icon && (
        <div className="flex items-center justify-center h-full bg-[#f9f9f9] px-2 py-0 border-r-[#ccc] border-r border-solid">
          {icon}
        </div>
      )}
      <input
        id={id}
        required={required}
        type={type === "password" && showPassword ? "text" : type}
        className="flex flex-1 p-2 border-[none] h-10 pr-[30px] outline-none text-sm"
        placeholder={placeholder}
        onChange={onChange}
      />
      {type === "password" && (
        <div
          className="absolute -translate-y-2/4 cursor-pointer text-[#888] right-2.5 top-2/4"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "👀" : "🙈"}
        </div>
      )}
    </div>
  );
};

export default TextInput;
