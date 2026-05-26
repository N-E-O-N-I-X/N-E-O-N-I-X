import React from 'react'
import { Outlet } from 'react-router-dom'
// import { useLocation, Link } from "react-router-dom";

export const MainLayout: React.FC = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
