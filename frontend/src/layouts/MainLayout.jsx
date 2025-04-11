import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function MainLayout() {
  return (
    <div>
        <Navbar />
        <div className='main-content'>
            <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout