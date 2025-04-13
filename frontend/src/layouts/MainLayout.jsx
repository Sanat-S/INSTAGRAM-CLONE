import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'

function MainLayout() {
  return (
    <div>
        <Topbar />
        <Navbar />
        <div className='main-content'>
            <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout