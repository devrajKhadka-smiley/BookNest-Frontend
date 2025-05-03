import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className="flex justify-between items-center bg-white border-b border-gray-200 px-4 py-2">
            {/* Left Section: Logo */}
            <div className="flex items-center">
                <img src="/src/assets/logo.png" alt="logo" className="w-32 h-auto" />
            </div>

            {/* Middle Section: Navigation Links */}
            <div className="hidden md:flex">
                <ul className="flex gap-6">
                    <li className="text-sm font-medium text-gray-700 hover:text-orange-500">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-sm font-medium text-gray-700 hover:text-orange-500">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="text-sm font-medium text-gray-700 hover:text-orange-500">
                        <Link to="/services">Services</Link>
                    </li>
                    <li className="text-sm font-medium text-gray-700 hover:text-orange-500">
                        <Link to="/contact">Contact</Link>
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