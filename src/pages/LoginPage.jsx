import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/image.png";
import TextInput from "../components/TextInput";
import { MdLockOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://localhost:7240/api/Auth/login",
        {
          // const response = await fetch(`${process.env.REACT_APP_BOOKNEST_URL}/Auth/stafflogin`, {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        sessionStorage.setItem("booknestUser", "hehe");
        alert("Login successful! 🎉");
      } else {
        const error = await response.json();
        alert(`Login failed: ${error.message}`);
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="flex w-[900px] h-[500px] bg-white overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.1)] rounded-[20px]">
        <div className="flex-1 flex flex-col justify-center px-[30px] py-10">
          <h2 className="text-[32px] font-bold text-center mb-2">
            Welcome Back
          </h2>
          <p className="italic text-[#666] text-sm text-center mb-[30px]">
            Login to Continue
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-5">
              <TextInput
                id={"email"}
                type="email"
                placeholder="Enter your Email"
                onChange={handleChange}
                icon={<CgProfile />}
              />
            </div>
            <div className="flex flex-col mb-5">
              <TextInput
                id="password"
                type="password"
                placeholder="Enter your username"
                onChange={handleChange}
                icon={<MdLockOutline />}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#5f6060] text-white text-base cursor-pointer transition-[background-color] duration-[0.3s] ease-[ease] mt-2.5 p-3 rounded-lg border-[none] hover:bg-[#3b3b3b];
"
            >
              Login
            </button>
          </form>
          <div className="text-center text-sm text-[#555] mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="hover:underline font-bold">
              Create Account
            </Link>
          </div>
        </div>

        <div
          className="flex-1 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
      </div>
    </div>
  );
};

export default LoginPage;
