import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Admin Panel</h1>
      <Outlet /> {/* Renders child routes */}
    </div>
  );
};

export default AdminLayout;