import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/layout/sidebar/Sidebar'
import Navbar from './Navbar'

const Dashboard = () => {
  return (
    <>
        <Sidebar />
        <Navbar />
        <Outlet />
    </>
  )
}

export default Dashboard