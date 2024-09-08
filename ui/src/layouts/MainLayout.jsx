import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'


const MainLayout = () => {
  return (
    <>
      
      <div className="bg-green-100  pt-4 min-h-screen flex-col">
        <Navbar />
        <Outlet />
      </div>
      <div className="text-center text-gray-500 bg-green-100">
        &copy; 2024 ChainCerts. All rights reserved.
      </div>
    </>
  );
}

export default MainLayout