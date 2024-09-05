import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'


const MainLayout = () => {
  return (
    <div className='bg-green-100 pb-[150px] pt-4'>
  
<Navbar/>
<Outlet/>
    </div>
    

  )
}

export default MainLayout