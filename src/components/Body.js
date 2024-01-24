import React from 'react'
import SideBar from './SideBar'
// import MainContainer from './MainContainer'
import "../App.css"
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex h-[100vh]'>
        <SideBar/>
        <Outlet />
    </div>
  )
}

export default Body