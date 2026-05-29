import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../widgets/Header'
import { LeftGrid } from '../../components/Grid/LeftGrid'

import style from './mainLayout.module.css'

export const MainLayout: React.FC = () => {
  return (
    <div className={style.page}>
      <Header />
      <main className={style.container}>
        <LeftGrid />
        <Outlet />
      </main>
    </div>
  )
}
