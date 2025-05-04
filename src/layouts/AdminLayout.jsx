import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64">
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