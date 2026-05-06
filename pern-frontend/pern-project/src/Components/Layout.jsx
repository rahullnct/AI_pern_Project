
import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      layout page
      <Outlet/>
    </div>
  )
}

export default Layout
