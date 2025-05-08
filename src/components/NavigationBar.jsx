import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import {
  FaHome,
  FaBook,
  FaInfoCircle,
  FaServicestack,
  FaPhoneAlt,
} from "react-icons/fa";

const NavigationBar = () => {
  const location = useLocation(); // Get the current path

  const navItems = [
    {
      path: "/",
      label: "Home",
      icon: <FaHome className="w-5 h-5 mr-2" />,
    },
    {
      path: "/books",
      label: "Books",
      icon: <FaBook className="w-5 h-5 mr-2" />,
    },
    {
      path: "/about",
      label: "About",
      icon: <FaInfoCircle className="w-5 h-5 mr-2" />,
    },
    {
      path: "/services",
      label: "Services",
      icon: <FaServicestack className="w-5 h-5 mr-2" />,
    },
    {
      path: "/contact",
      label: "Contact",
      icon: <FaPhoneAlt className="w-5 h-5 mr-2" />,
    },
  ];

  return (
    // <div className="sticky top-0 z-50 flex justify-between items-center bg-white border-b border-gray-200 px-4 py-2">

    <div className="sticky top-0 z-50 flex justify-between items-center bg-white border-b border-gray-200 px-4 py-2">
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <img src="/src/assets/logo.png" alt="logo" className="w-32 h-auto" />
      </div>

      {/* Middle Section: Navigation Links */}
      <div className="hidden md:flex">
        <ul className="flex gap-14">
          {navItems.map(({ path, label, icon }) => (
            <li key={path}>
              <Link
                to={path}
                className={`font-medium flex ${
                  location.pathname === path
                    ? "text-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                {icon}
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Right Section: Buttons */}
      <div className="flex gap-2">
        {/* Whitelist Icon */}
        <Link
          to="/whitelists"
          className={`text-gray-700 hover:text-orange-500 relative transition-colors duration-300 ${
            location.pathname === "/whitelists"
              ? "text-orange-500 active-link"
              : ""
          }`}
        >
          <FaHeart size={20} />
        </Link>

        {/* Cart Icon */}
        <Link
          to="/cart"
          className={`text-gray-700 hover:text-orange-500 relative transition-colors duration-300 ${
            location.pathname === "/cart" ? "text-orange-500 active-link" : ""
          }`}
        >
          <FaCartPlus size={20} />
        </Link>
        <Link to="/login">
          <button className="px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded hover:bg-orange-600 cursor-pointer">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded hover:bg-orange-600 cursor-pointer">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
