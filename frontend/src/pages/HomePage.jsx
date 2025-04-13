import React from 'react'
import '../styles/Home.css'
import Feed from '../components/Feed'
import { Outlet } from 'react-router-dom'
import RightSideBar from '../components/RightSideBar'
import Stories from '../components/Stories'

function HomePage() {
  return (
    <div className="home-page">
      <div className="feed-part">
        <Stories />
        <Feed />
        <Outlet />
      </div>
      <RightSideBar/>
    </div>
  )
}

export default HomePage