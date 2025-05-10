import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import {
  FaHome,
  FaBook,
  FaInfoCircle,
  FaServicestack,
  FaHeadset,
  FaPhoneAlt,
} from "react-icons/fa";
import home from "../assets/home.json";
import book from "../assets/book.json";
import info from "../assets/info.json";
import phone from "../assets/phone.json";
import service from "../assets/service.json";
import Lottie from "lottie-react";
const HomeIcon = () => (
  <div className="w-5 h-5 mr-2 flex">
    <Lottie animationData={home} loop={true} />
  </div>
);

const BookIcon = () => (
  <div className="w-5 h-5 mr-2">
    <Lottie animationData={book} loop={true} />
  </div>
);

const InfoIcon = () => (
  <div className="w-5 h-5 mr-2">
    <Lottie animationData={info} loop={true} />
  </div>
);

const ServiceIcon = () => (
  <div className="w-7 h-7 mr-2">
    <Lottie animationData={service} loop={true} />
  </div>
);

const PhoneIcon = () => (
  <div className="w-8 h-8 mr-2">
    <Lottie animationData={phone} loop={true} />
  </div>
);

const NavigationBar = () => {
  const location = useLocation();

const navItems = [
  {
    path: "/",
    content: (
      <div className="flex items-center">
        {location.pathname === "/" ? (
          <FaHome className="w-4 h-4 mr-2" />
        ) : (
          <HomeIcon />
        )}
        Home
      </div>
    ),
  },
  {
    path: "/books",
    content: (
      <div className="flex items-center">
        {location.pathname === "/books" ? (
          <FaBook className="w-4 h-4 mr-2" />
        ) : (
          <BookIcon />
        )}
        Books
      </div>
    ),
  },
  {
    path: "/about",
    content: (
      <div className="flex items-center">
        {location.pathname === "/about" ? (
        <FaInfoCircle className="w-4 h-4 mr-2" />
        ) : (
          <InfoIcon />
        )}
        About
      </div>
    ),
  },
  {
    path: "/services",
    content: (
      <div className="flex items-center">
        {location.pathname === "/services" ? (
        <FaHeadset className="w-4 h-4 mr-2" />
        ):(
          <ServiceIcon/>
        )}
        Service
      </div>
    ),
  },
  {
    path: "/contact",
    content: (
      <div className="flex items-center">
        {location.pathname === "/contact" ? (
        <FaPhoneAlt className="w-4 h-4 mr-2" />
        ) : (
          <PhoneIcon />
        )}
        Contact
      </div>
    ),
  },
];



  return (
    <div className="sticky top-0 z-50 flex justify-between items-center bg-white border-b border-gray-200 px-4 py-2">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/src/assets/logo.png" alt="logo" className="w-32 h-auto" />
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex">
        <ul className="flex gap-10">
          {navItems.map(({ path, content }) => (
            <li key={path} className="flex items-center justify-center">
              <Link
                to={path}
                className={`text-sm flex items-center ${
                  location.pathname === path
                    ? "text-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                {content}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side Icons and Buttons */}
      <div className="flex gap-10">
        <div className="flex gap-4">
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
          <Link
            to="/cart"
            className={`text-gray-700 hover:text-orange-500 relative transition-colors duration-300 ${
              location.pathname === "/cart" ? "text-orange-500 active-link" : ""
            }`}
          >
            <FaCartPlus size={20} />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
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
    </div>
  );
};

export default NavigationBar;
