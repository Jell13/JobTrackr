import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
        <HomeNavbar/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default PublicLayout