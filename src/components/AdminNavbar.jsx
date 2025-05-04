import React from "react";
import { Link, useLocation } from "react-router-dom"; // Use React Router
import {
  FaTachometerAlt, // Dashboard
  FaBook, // Books
  FaShoppingCart, // Orders
  FaBullhorn, // Announcements
  FaUsers, // Staffs
  FaSignOutAlt, // Logout
} from "react-icons/fa";

const AdminNavbar = () => {
  const location = useLocation(); // Get the current path

  return (
    <div className="min-h-screen w-64 bg-gray-950 text-gray-300 flex flex-col shadow-xl">
      {/* Logo */}
      <div className="p-6 text-center border-b border-gray-800">
        <img
          src="/src/assets/logo.png" // Update the path to your logo file
          alt="Admin Logo"
          className="mx-auto w-full h-auto" // Center the logo and set its size
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {/* Dashboard */}
          <li>
            <Link
              to="/admin/dashboard"
              className={`flex items-center gap-4 px-4 py-3 rounded-md transition-all duration-200 ${
                location.pathname === "/admin/dashboard" || location.pathname === "/admin"
                  ? "bg-gray-800 text-white shadow-inner"
                  : "hover:bg-gray-800 hover:text-white"
              }`}
            >
              <FaTachometerAlt className="text-xl" />
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
          </li>

          {/* Books */}
          <li>
            <Link
              to="/admin/books"
              className={`flex items-center gap-4 px-4 py-3 rounded-md transition-all duration-200 ${
                location.pathname === "/admin/books"
                  ? "bg-gray-800 text-white shadow-inner"
                  : "hover:bg-gray-800 hover:text-white"
              }`}
            >
              <FaBook className="text-xl" />
              <span className="text-sm font-medium">Books</span>
            </Link>
          </li>

          {/* Orders */}
          <li>
            <Link
              to="/admin/orders"
              className={`flex items-center gap-4 px-4 py-3 rounded-md transition-all duration-200 ${
                location.pathname === "/admin/orders"
                  ? "bg-gray-800 text-white shadow-inner"
                  : "hover:bg-gray-800 hover:text-white"
              }`}
            >
              <FaShoppingCart className="text-xl" />
              <span className="text-sm font-medium">Orders</span>
            </Link>
          </li>

          {/* Announcements */}
          <li>
            <Link
              to="/admin/announcements"
              className={`flex items-center gap-4 px-4 py-3 rounded-md transition-all duration-200 ${
                location.pathname === "/admin/announcements"
                  ? "bg-gray-800 text-white shadow-inner"
                  : "hover:bg-gray-800 hover:text-white"
              }`}
            >
              <FaBullhorn className="text-xl" />
              <span className="text-sm font-medium">Announcements</span>
            </Link>
          </li>

          {/* Staffs */}
          <li>
            <Link
              to="/admin/staffs"
              className={`flex items-center gap-4 px-4 py-3 rounded-md transition-all duration-200 ${
                location.pathname === "/admin/staffs"
                  ? "bg-gray-800 text-white shadow-inner"
                  : "hover:bg-gray-800 hover:text-white"
              }`}
            >
              <FaUsers className="text-xl" />
              <span className="text-sm font-medium">Staffs</span>
            </Link>
          </li>

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

export default AdminNavbar;
