import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/signup.png";
import TextInput from "../components/TextInput";
import { FaRegUser } from "react-icons/fa";
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { RiLockStarLine } from "react-icons/ri";
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
    <div className="flex justify-center items-center mt-10">
      <div className="flex w-[900px] h-[550px] shadow-[0_0_10px_rgba(0,0,0,0.1)] overflow-hidden bg-[white] rounded-[20px]">
        <div
          className="flex-1 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div className="flex-1 flex flex-col justify-center p-10">
          <h2 className="text-[32px] font-bold text-center mb-2.5">Sign Up</h2>
          <p className="text-sm text-[#777] text-center mb-[30px]">
            No credit required!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[15px]">
            <div className="flex gap-2.5">
              <TextInput
                id="name"
                type="text"
                placeholder="Name"
                onChange={handleChange}
                icon={<FaRegUser />}
              />
              <TextInput
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                required
                onChange={handleChange}
                icon={<CgProfile />}
              />
            </div>
            <div className="flex gap-2.5">
              <TextInput
                type="text"
                id="address"
                placeholder="Address"
                required
                onChange={handleChange}
                icon={<GrLocation />}
              />
              <TextInput
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                icon={<MdOutlineEmail />}
              />
            </div>

            <TextInput
              id="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              icon={<MdLockOutline />}
            />
            <TextInput
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
              icon={<RiLockStarLine />}
            />
            <button
              type="submit"
              className="bg-[#5f6060] text-[white] text-base cursor-pointer transition-[background-color] duration-[0.3s] p-3 rounded-md border-[none] hover:bg-[#3b3b3b]"
            >
              Register
            </button>
          </form>
          <div className="text-sm text-center mt-[15px]">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-[black] hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
