import React from 'react'
import '../styles/Home.css'
import Feed from '../components/Feed'
import { Outlet } from 'react-router-dom'
import RightSideBar from '../components/RightSideBar'

function HomePage() {
  return (
    <div className="home-page">
      <div className="feed">
        <Feed />
        <Outlet />
      </div>
      <RightSideBar/>
    </div>
  )
}

export default HomePage