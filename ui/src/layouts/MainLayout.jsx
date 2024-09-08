import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-green-100 pt-4 flex-grow">
        <Navbar />
        <Outlet />
      </div>
      <div className="text-center text-gray-500 bg-green-100 py-4">
        &copy; 2024 ChainCerts. All rights reserved.
      </div>
    </div>
  );
};

export default MainLayout;
