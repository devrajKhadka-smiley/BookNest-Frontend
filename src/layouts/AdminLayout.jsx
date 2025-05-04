import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";

const AdminLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 min-h-screen">
        <AdminNavbar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet /> {/* Renders child routes */}
      </div>
    </div>
  );
};

export default AdminLayout;