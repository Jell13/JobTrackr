import React from 'react'
import BoardNavbar from '../components/BoardNavbar'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
        <BoardNavbar/>
        <Outlet/>
    </>
  )
}

export default AppLayout