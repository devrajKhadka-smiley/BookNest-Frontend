import React from "react";
import { Outlet } from "react-router-dom";
import StaffNavbar from "../components/StaffNavbar";

const StaffLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 min-h-screen">
        <StaffNavbar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <Outlet /> {/* Renders child routes */}
      </div>
    </div>
  );
};

export default StaffLayout;
