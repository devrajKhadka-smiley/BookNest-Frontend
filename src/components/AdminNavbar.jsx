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
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaBookOpen, FaUserEdit } from "react-icons/fa";

const AdminNavbar = () => {
  const location = useLocation(); // Get the current path
  const [catalogOpen, setCatalogOpen] = useState(false);
  const linkClass = (path) =>
    `block px-2 py-1 rounded-md ${
      location.pathname === path
        ? "bg-gray-700 text-white"
        : "hover:bg-gray-800 hover:text-white"
    }`;
  // Define navigation items in an array
  const navItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <FaTachometerAlt /> },
    { name: "Orders", path: "/admin/orders", icon: <FaShoppingCart /> },
    {
      name: "Announcements",
      path: "/admin/announcements",
      icon: <FaBullhorn />,
    },
    { name: "Staffs", path: "/admin/staffs", icon: <FaUsers /> },
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
          {/* Collapsible Catalog Group */}
          <li>
            <button
              onClick={() => setCatalogOpen(!catalogOpen)}
              className="flex items-center w-full gap-4 px-4 py-3 rounded-md transition-all duration-200 hover:bg-gray-800 hover:text-white hover:cursor-pointer"
            >
              <FaBook />
              <span className="text-sm font-medium">Catalog</span>
              <FaChevronDown
                className={`ml-auto transform transition-transform duration-300 ${
                  catalogOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                catalogOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="ml-4 mt-2 space-y-2 p-3 rounded-lg bg-gray-900/80 backdrop-blur-sm shadow-inner ring-1 ring-gray-800 text-sm text-gray-300">
                <li>
                  <Link
                    to="/admin/authors"
                    className={`${linkClass(
                      "/admin/authors"
                    )} flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition`}
                  >
                    <FaUserEdit className="text-gray-400" />
                    <span>Authors</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/books"
                    className={`${linkClass(
                      "/admin/books"
                    )} flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition`}
                  >
                    <FaBookOpen className="text-gray-400" />
                    <span>Books</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/genres"
                    className={`${linkClass(
                      "/admin/genres"
                    )} flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition`}
                  >
                    <FaTags className="text-gray-400" />
                    <span>Genres</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/publications"
                    className={`${linkClass(
                      "/admin/publications"
                    )} flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition`}
                  >
                    <FaBuilding className="text-gray-400" />
                    <span>Publications</span>
                  </Link>
                </li>
              </ul>
            </div>
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
