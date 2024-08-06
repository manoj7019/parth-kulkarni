import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Copyright from '../Components/Copyright'
import ScrollToTop from '../Components/ScrollToTop'

const MainLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Copyright />
    </div>
  )
}

export default MainLayout
