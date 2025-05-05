import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBook,
  FaShoppingCart,
  FaBullhorn,
  FaUsers,
  FaSignOutAlt,
  FaPenNib,
  FaTags,
  FaBuilding,
} from "react-icons/fa";

const StaffNavbar = () => {
  const location = useLocation(); // Get the current path

  // Define navigation items in an array
  const navItems = [
    { name: "Dashboard", path: "/staff/staff-dashboard", icon: <FaTachometerAlt /> },
    { name: "Orders", path: "/staff/staff-orders", icon: <FaShoppingCart /> }
  ];

  return (
    <div className="min-h-screen w-64 bg-gray-950 text-gray-300 flex flex-col shadow-xl">
      {/* Logo */}
      <div className="p-6 text-center border-b border-gray-800">
        <img
          src="/src/assets/logo.png"
          alt="Admin Logo"
          className="mx-auto w-full h-auto"
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-md transition-all duration-200 ${
                  location.pathname === item.path
                    ? "bg-gray-800 text-white shadow-inner"
                    : "hover:bg-gray-800 hover:text-white"
                }`}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            </li>
          ))}

          {/* Logout */}
          <li>
            <button
              onClick={() => alert("Logged out!")} // Replace with your logout logic
              className="flex items-center w-full gap-4 px-4 py-3 rounded-md transition-all duration-200 hover:bg-red-600 hover:text-white text-red-400"
            >
              <FaSignOutAlt className="text-xl" />
              <span className="text-sm font-medium">Log Out</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800 text-xs text-center text-gray-500">
        © {new Date().getFullYear()} BookNest
      </div>
    </div>
  );
};

export default StaffNavbar;