import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/login.jpeg";
import TextInput from "../../components/TextInput";
import { MdLockOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const StaffLoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://localhost:7240/api/Auth/stafflogin", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        sessionStorage.setItem("booknestStaff", JSON.stringify(result));
        alert("Staff Login successful!");
      } else {
        alert(`Login failed: ${result.message || "Unknown error"}`);
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#f7f7f7]">
      <div className="flex w-[900px] h-[500px] bg-white overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.1)] rounded-[20px]">
        {/* Left side - Login form */}
        <div className="flex-1 flex flex-col justify-center px-[30px] py-10">
          <h2 className="text-[32px] font-bold text-center mb-2">Staff Login</h2>
          <p className="italic text-[#666] text-sm text-center mb-[30px]">
            Login to manage your tasks
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-5">
              <TextInput
                name="email"
                type="email"
                placeholder="Enter your Email"
                onChange={handleChange}
                value={formData.email}
                icon={<CgProfile />}
              />
            </div>
            <div className="flex flex-col mb-5">
              <TextInput
                name="password"
                type="password"
                placeholder="Enter your Password"
                onChange={handleChange}
                value={formData.password}
                icon={<MdLockOutline />}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#5f6060] text-white text-base cursor-pointer transition-[background-color] duration-[0.3s] ease-[ease] mt-2.5 p-3 rounded-lg border-[none] hover:bg-[#3b3b3b] disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <div className="text-center text-sm text-[#555] mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="hover:underline font-bold">
              Create Account
            </Link>
          </div>
        </div>

        {/* Right side - Image */}
        <div
          className="flex-1 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
      </div>
    </div>
  );
};

export default StaffLoginPage;
