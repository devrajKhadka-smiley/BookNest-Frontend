import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavigationBar = () => {
    const location = useLocation(); // Get the current path

    return (
        <div className="flex justify-between items-center bg-white border-b border-gray-200 px-4 py-2">
            {/* Left Section: Logo */}
            <div className="flex items-center">
                <img src="/src/assets/logo.png" alt="logo" className="w-32 h-auto" />
            </div>

            {/* Middle Section: Navigation Links */}
            <div className="hidden md:flex">
                <ul className="flex gap-6">
                    <li>
                        <Link
                            to="/"
                            className={`text-sm font-medium ${
                                location.pathname === '/'
                                    ? 'text-orange-500'
                                    : 'text-gray-700 hover:text-orange-500'
                            }`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/books"
                            className={`text-sm font-medium ${
                                location.pathname === '/books'
                                    ? 'text-orange-500'
                                    : 'text-gray-700 hover:text-orange-500'
                            }`}
                        >
                            Books
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={`text-sm font-medium ${
                                location.pathname === '/about'
                                    ? 'text-orange-500'
                                    : 'text-gray-700 hover:text-orange-500'
                            }`}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            className={`text-sm font-medium ${
                                location.pathname === '/services'
                                    ? 'text-orange-500'
                                    : 'text-gray-700 hover:text-orange-500'
                            }`}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className={`text-sm font-medium ${
                                location.pathname === '/contact'
                                    ? 'text-orange-500'
                                    : 'text-gray-700 hover:text-orange-500'
                            }`}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Right Section: Buttons */}
            <div className="flex gap-2">
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