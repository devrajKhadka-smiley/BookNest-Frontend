import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

const ClientLayout = () => {
  return (
    <div>
      <NavigationBar />
      <div className="p-4">
        <Outlet /> {/* Renders child routes */}
      </div>
    </div>
  );
};

export default ClientLayout;