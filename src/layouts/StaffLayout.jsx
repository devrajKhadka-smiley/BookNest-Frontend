import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/AdminNavbar"; // Using the same Navigation bar you have

const StaffLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 min-h-screen">
        <Navigation />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <Outlet /> {/* Renders child routes */}
      </div>
    </div>
  );
};

export default StaffLayout;
